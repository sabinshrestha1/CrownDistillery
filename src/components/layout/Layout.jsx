import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="bg-background-dark text-gray-200 font-sans antialiased min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
