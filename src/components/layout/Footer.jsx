import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Crown logo.webp';

const Footer = () => {
    return (
        <footer className="bg-wood-dark text-white pt-24 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    {/* ... (Brand section remains unchanged, but easier to just replace navigation block or file start) ... */}
                    {/* actually I will use multi_replace for cleaner edit or just target the Navigation block if I imported Link globally. 
                       Wait, I need to add the import first. I'll replace the top of file and the navigation block. 
                       Let's do two replacements in one go using replace_file_content is not possible for multiple chunks.
                       I'll use replace_file_content for the import, then another for the list.
                       Actually, I can just replace from top to the end of navigation? That's too much content.
                       I will do it in two steps or use correct context.
                       Let's just replace the whole file content for safety/cleanliness? 
                       No, that's expensive.
                       I'll replace the import first.
                    */}
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
                            <li><Link className="hover:text-white transition-colors" to="/">Home</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/spirits">Spirits</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/about-us">About Us</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/careers">Careers</Link></li>
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
