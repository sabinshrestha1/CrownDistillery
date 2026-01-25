import React from 'react';
import crownLogo from '../../assets/images/Crown logo.webp';

const ExperimentalCenters = () => {
    return (
        <section className="relative mt-20 py-24 min-h-[700px]">
            <div className="absolute inset-0 z-0 bg-wood-dark">
                {/* Video removed as per request */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <img
                    src={crownLogo}
                    alt="Crown Reserve Logo"
                    className="h-24 md:h-32 w-auto mx-auto mb-6 object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] brightness-110"
                />
                <h2 className="font-display text-4xl md:text-6xl font-medium text-white mb-6 italic">"Whiskey is liquid sunshine."</h2>
                <p className="text-gray-300 font-script text-4xl mb-16">- George Bernard Shaw</p>

                <div className="relative bg-wood-dark/95 border border-white/10 p-8 md:p-10 shadow-2xl overflow-hidden max-w-5xl mx-auto" id="experimental-centers">

                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform translate-x-20"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <span className="text-primary tracking-[0.3em] uppercase text-[10px] font-bold border-b border-primary/20 pb-1">New Strategic Concept</span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4 uppercase tracking-tight">
                                LIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">EXPERIMENTAL</span> CENTERS
                            </h2>
                            <p className="max-w-xl mx-auto text-gray-400 font-serif text-sm leading-relaxed italic">
                                "Redefining the distillery visit through immersive sensory experiences."
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-5 border border-white/5 bg-black/40 group hover:border-primary/40 transition-all duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">potted_plant</span>
                                <h3 className="text-white font-display font-bold text-xs uppercase mb-2 tracking-widest">Alcoholic Garden</h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed">Live crafting & botanical infusion displays.</p>
                            </div>

                            <div className="p-5 border border-white/5 bg-black/40 group hover:border-primary/40 transition-all duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">liquor</span>
                                <h3 className="text-white font-display font-bold text-xs uppercase mb-2 tracking-widest">Tasting Lab</h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed">Exclusive access to limited experimental spirits.</p>
                            </div>

                            <div className="p-5 border border-white/5 bg-black/40 group hover:border-primary/40 transition-all duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">clinical_notes</span>
                                <h3 className="text-white font-display font-bold text-xs uppercase mb-2 tracking-widest">Guided Sessions</h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed">Deep-dive education on flavor profiles.</p>
                            </div>

                            <div className="p-5 border border-white/5 bg-black/40 group hover:border-primary/40 transition-all duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">psychology</span>
                                <h3 className="text-white font-display font-bold text-xs uppercase mb-2 tracking-widest">Master Blending</h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed">Direct engagement with our lead distillers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperimentalCenters;
