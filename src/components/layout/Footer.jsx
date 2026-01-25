import React from 'react';
import Logo from '../../assets/images/Crown logo.webp';

const Footer = () => {
    return (
        <footer className="bg-wood-dark text-white pt-24 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={Logo} alt="Crown Reserve Logo" className="w-12 h-12 object-contain" />
                            <div className="flex flex-col items-start">
                                <h3 className="font-display text-xl text-primary font-bold tracking-widest uppercase leading-none">CROWN RESERVE</h3>
                                <span className="text-[9px] tracking-[0.4em] text-gray-400 uppercase leading-tight mt-0.5 ml-0.5 group-hover:text-primary transition-colors">DISTILLERY</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-serif">
                            A dedication to the art of distillation. Creating moments of gold from the grains of the earth.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all group">
                                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">thumb_up</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all group">
                                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">photo_camera</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all group">
                                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">group</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8 font-sans">Navigation</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-sans font-light">
                            <li><a className="hover:text-white transition-colors" href="/">Home</a></li>
                            <li><a className="hover:text-white transition-colors" href="/spirits">Spirits</a></li>
                            <li><a className="hover:text-white transition-colors" href="/about-us">About Us</a></li>
                            <li><a className="hover:text-white transition-colors" href="/careers">Careers</a></li>
                            <li><a className="hover:text-white transition-colors" href="/#story">Our Story</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8 font-sans">Contact Us</h4>
                        <ul className="space-y-5 text-gray-400 text-sm font-sans font-light">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">apartment</span>
                                <div>
                                    <span className="block text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">Corporate Office</span>
                                    <span className="text-xs">Kathmandu–13, Kalimati, Nepal</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 border-b border-white/5 pb-4">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">factory</span>
                                <div>
                                    <span className="block text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">Factory Location</span>
                                    <span className="text-xs">Suddodhan–3, Rupandehi, Nepal</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">phone</span>
                                <div className="flex flex-col">
                                    <a href="tel:+9779857024040" className="hover:text-white transition-colors">+977 9857024040</a>
                                    <a href="tel:+9779801029601" className="hover:text-white transition-colors">+977 9801029601</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">email</span>
                                <div className="flex flex-col">
                                    <a href="mailto:info@crownreserve.com" className="hover:text-white transition-colors italic">info@crownreserve.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Crown Reserve Distillery. Website by <b>Biz Bazar Ltd.</b></p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
