import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background-dark/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-20">

                    {/* Left Section: Spacer (Shop removed) */}
                    <div className="flex-1 flex justify-start">
                        {/* Shop link removed as per request */}
                    </div>

                    {/* Center Section: Logo (Absolute Center) */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <Link to="/" className="flex flex-col items-center group cursor-pointer">
                            <span className="font-display text-2xl md:text-3xl tracking-widest text-primary font-bold group-hover:text-white transition-colors duration-500 drop-shadow-md whitespace-nowrap">
                                CROWN RESERVE
                            </span>
                            <span className="text-[9px] tracking-[0.4em] text-gray-500 uppercase group-hover:text-primary transition-colors">
                                Distillery
                            </span>
                        </Link>
                    </div>

                    {/* Right Section: Desktop Menu & Mobile Toggle */}
                    <div className="flex-1 flex justify-end items-center">
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-10">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Spirits', path: '/spirits' },
                                    { name: 'Our Story', path: '/#story' }
                                ].map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="text-gray-400 hover:text-white relative group px-1 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-all"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button - Visible only on mobile */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                type="button"
                                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                <span className="material-icons text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background-dark/98 backdrop-blur-xl border-t border-white/10 absolute w-full left-0 top-20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Spirits', path: '/spirits' },
                            { name: 'Our Story', path: '/#story' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium tracking-widest uppercase"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
