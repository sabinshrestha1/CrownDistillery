import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Crown logo.webp';

const Footer = () => {
    return (
        <footer className="bg-background-dark text-primary pt-24 pb-10 border-t border-primary/40 relative overflow-hidden">
            {/* Gold Overlay/Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={Logo} alt="Crown Reserve Logo" className="w-12 h-12 object-contain filter drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
                            <div className="flex flex-col items-start">
                                <h3 className="font-display text-xl text-primary font-bold tracking-widest uppercase leading-none drop-shadow-sm">CROWN RESERVE</h3>
                                <span className="text-[9px] tracking-[0.4em] text-primary/80 uppercase leading-tight mt-0.5 ml-0.5 group-hover:text-primary transition-colors">DISTILLERY</span>
                            </div>
                        </div>
                        <p className="text-primary/70 text-sm leading-relaxed mb-6 font-serif">
                            A dedication to the art of distillation. Creating moments of gold from the grains of the earth.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all group">
                                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">thumb_up</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all group">
                                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">photo_camera</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all group">
                                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">group</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-8 font-sans border-b border-primary/20 pb-2 inline-block">Navigation</h4>
                        <ul className="space-y-4 text-primary/70 text-sm font-sans font-light">
                            <li><Link className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" to="/"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></span>Home</Link></li>
                            <li><Link className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" to="/spirits"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></span>Spirits</Link></li>
                            <li><Link className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" to="/about-us"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></span>About Us</Link></li>
                            <li><Link className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" to="/careers"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></span>Careers</Link></li>
                            <li><Link className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" to="/our-story"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></span>Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-8 font-sans border-b border-primary/20 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-5 text-primary/70 text-sm font-sans font-light">
                            <li className="flex items-start gap-3 group">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5 group-hover:text-white transition-colors">apartment</span>
                                <div>
                                    <span className="block text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">Corporate Office</span>
                                    <span className="text-xs group-hover:text-primary/90 transition-colors">Kathmandu–13, Kalimati, Nepal</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 border-b border-primary/10 pb-4 group">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5 group-hover:text-white transition-colors">factory</span>
                                <div>
                                    <span className="block text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">Factory Location</span>
                                    <span className="text-xs group-hover:text-primary/90 transition-colors">Suddodhan–3, Rupandehi, Nepal</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <span className="material-symbols-outlined text-primary text-sm mt-1 group-hover:text-white transition-colors">phone</span>
                                <div className="flex flex-col">
                                    <a href="tel:+9779857024040" className="hover:text-white transition-colors">+977 9857024040</a>
                                    <a href="tel:+9779801029601" className="hover:text-white transition-colors">+977 9801029601</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <span className="material-symbols-outlined text-primary text-sm mt-1 group-hover:text-white transition-colors">email</span>
                                <div className="flex flex-col">
                                    <a href="mailto:info@crownreserve.com" className="hover:text-white transition-colors italic">info@crownreserve.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-primary/50 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Crown Reserve Distillery. Website by <b className="text-primary hover:text-white transition-colors">Biz Bazar Ltd.</b></p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
