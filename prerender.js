import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const routesToPrerender = ['/', '/about-us', '/spirits', '/our-story', '/careers'];

(async () => {
    console.log('Starting prerender...');

    // Start vite preview server to serve the built app
    const server = await preview({
        preview: { port: 1337 },
        root: toAbsolute('.'),
        configFile: false,
        build: { outDir: 'dist' }
    });

    const port = 1337;
    console.log(`Server started on port ${port}`);

    const browser = await puppeteer.launch({ headless: "new" });

    for (const route of routesToPrerender) {
        const page = await browser.newPage();
        try {
            // Set User Agent to Googlebot to bypass Age Gate and ensure we capture content
            await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

            const url = `http://localhost:${port}${route}`;
            console.log(`Prerendering: ${url}`);

            await page.goto(url, { waitUntil: 'networkidle0' });

            // Identify the output file path
            // For root '/', it's dist/index.html
            // For '/about-us', it's dist/about-us/index.html
            const fileName = route === '/' ? 'index.html' : `${route.substring(1)}/index.html`;
            const filePath = toAbsolute(`dist/${fileName}`);

            // Create directory if it doesn't exist
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            // Get the HTML content
            const content = await page.content();

            // Write the file
            fs.writeFileSync(filePath, content);
            console.log(`Generated: ${filePath}`);

        } catch (e) {
            console.error(`Failed to prerender ${route}:`, e);
        } finally {
            await page.close();
        }
    }

    // Copy index.html to 404.html for SPA fallback
    const indexHtmlPath = toAbsolute('dist/index.html');
    const notFoundHtmlPath = toAbsolute('dist/404.html');
    if (fs.existsSync(indexHtmlPath)) {
        try {
            fs.copyFileSync(indexHtmlPath, notFoundHtmlPath);
            console.log('Created 404.html');
        } catch (err) {
            console.error('Error copying 404.html:', err);
        }
    }

    await browser.close();
    server.httpServer.close();
    console.log('Prerendering complete.');
    process.exit(0);
})();
