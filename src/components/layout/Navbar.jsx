import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import crownLogo from '../../assets/images/Crown logo.webp';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

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

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Spirits', path: '/spirits' },
        { name: 'Our Story', path: '/our-story' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Careers', path: '/careers' }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-[#151515]/95 backdrop-blur-xl border-b border-primary/30 shadow-[0_10px_30px_-10px_rgba(212,175,55,0.1)]'
            : 'bg-transparent border-b border-transparent'
            }`}>
            {/* Top Gold Line Gradient */}
            <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-20">

                    {/* Left Section: Spacer */}
                    <div className="flex-1 flex justify-start">
                        {/* Empty spacer */}
                    </div>

                    {/* Center Section: Logo (Absolute Center) */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-center pointer-events-none">
                        <Link to="/" className="flex items-center gap-3 group cursor-pointer pointer-events-auto">
                            <img
                                src={crownLogo}
                                alt="Crown Reserve Logo"
                                className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="flex flex-col items-start text-shadow-gold">
                                <span className="font-display text-xl md:text-2xl tracking-widest text-primary font-bold group-hover:text-white transition-colors duration-500 drop-shadow-md whitespace-nowrap leading-none">
                                    CROWN RESERVE
                                </span>
                                <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase group-hover:text-primary transition-colors leading-tight ml-0.5 mt-0.5">
                                    Distillery
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Right Section: Desktop Menu & Mobile Toggle */}
                    <div className="flex-1 flex justify-end items-center">
                        {/* Desktop Menu with Dropdown */}
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-10 relative">
                                {/* Dropdown Button */}
                                <div
                                    className="relative group"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="text-primary hover:text-white relative px-3 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center gap-1 focus:outline-none group-hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"
                                    >
                                        Menu
                                        <span className="material-symbols-outlined text-sm transition-transform duration-300 transform group-hover:rotate-180">expand_more</span>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div
                                        className={`absolute right-0 mt-2 w-56 bg-[#181818]/95 backdrop-blur-2xl border border-primary/20 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.8)] transition-all duration-300 origin-top-right rounded-sm overflow-hidden ${dropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
                                    >
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                                        {navItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className="block px-6 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 hover:text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all border-b border-primary/5 last:border-b-0 group"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_5px_rgba(212,175,55,1)]"></span>
                                                    {item.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                type="button"
                                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white shadow-[0_0_10px_rgba(212,175,55,0.2)] border border-primary/20 focus:outline-none backdrop-blur-sm"
                            >
                                <span className="sr-only">Open main menu</span>
                                <span className="material-icons text-2xl drop-shadow-[0_0_2px_rgba(212,175,55,0.8)]">{mobileMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#121212]/98 backdrop-blur-xl border-t border-primary/20 absolute w-full left-0 top-20 animate-fade-in-down shadow-2xl">
                    <div className="px-4 pt-4 pb-6 space-y-2 sm:px-3 text-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-primary/90 hover:text-white block px-3 py-3 text-sm font-medium tracking-[0.2em] uppercase border-b border-primary/10 last:border-b-0 hover:bg-primary/5 transition-all"
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
