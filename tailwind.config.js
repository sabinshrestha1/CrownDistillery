/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Brightened Gold for better contrast
        "primary-dim": "#C59D5F", // Original muted gold
        "primary-dark": "#8A6D3B",
        "background-light": "#F9F7F2", // Lighter warm white
        "background-dark": "#0d0d0d", // Slightly lighter than true black
        "wood-dark": "#2a2420", // Lightened wood tone
        "rust": "#964B00",
        "charcoal": "#1a1a1a"
      },
      fontFamily: {
        display: ["'Cinzel'", "serif"],
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
        script: ["'Pinyon Script'", "cursive"],
      },
      backgroundImage: {
        'wood-pattern': "url('https://images.unsplash.com/photo-1542285210-9b48624190c7?q=80&w=2070&auto=format&fit=crop')",
        'barrel-room': "url('https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2070&auto=format&fit=crop')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        widthGrow: {
          '0%': { width: '0' },
          '100%': { width: '6rem' }, // w-24
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        widthGrow: 'widthGrow 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}
