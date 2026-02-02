import React from 'react';
import crownLogo from '../../assets/images/Crown logo.webp';

const ExperimentalCenters = () => {
    return (
        <section className="relative mt-20 py-24 min-h-[700px]">
            {/* Background overlay */}
            <div className="absolute inset-0 z-0 bg-wood-dark">
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Crown Logo */}
                <img
                    src={crownLogo}
                    alt="Crown Reserve Logo"
                    className="h-24 md:h-32 w-auto mx-auto mb-6 object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] brightness-110"
                />

                {/* Header */}
                <h2 className="font-display text-4xl md:text-6xl font-medium text-white mb-6 italic">
                    "Live Experimental <br />Drink Facility"
                </h2>
                <p className="text-gray-300 font-script text-xl md:text-2xl mb-16">
                    (New Strategic Concept)
                </p>

                {/* Main Card */}
                <div className="relative bg-wood-dark/95 border border-white/10 p-8 md:p-10 shadow-2xl overflow-hidden max-w-5xl mx-auto rounded-xl">

                    {/* Goldish accent */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
                                CRDL will introduce <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Interactive Live Drink Experience</span> Centers
                            </h2>
                            <p className="max-w-xl mx-auto text-gray-400 font-serif text-sm md:text-base leading-relaxed italic">
                                Consumers can:
                            </p>
                        </div>

                        {/* Grid of features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-5 border border-white/5 bg-black/40 group hover:border-primary/40 transition-all duration-300 rounded-md">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">potted_plant</span>
                                <h3 className="text-white font-display font-bold text-xs uppercase mb-2 tracking-widest">Observe Live Crafting & Alcoholic Garden</h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed">
                                    Watch small-batch beverage crafting and botanical infusions.
                                </p>
                            </div>

                            <div className="p-5 border border-white/5 bg-black/40 group hover:border-primary/40 transition-all duration-300 rounded-md">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">liquor</span>
                                <h3 className="text-white font-display font-bold text-xs uppercase mb-2 tracking-widest">Taste Experimental Spirits</h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed">
                                    Sample premium limited edition spirits and innovative blends.
                                </p>
                            </div>

                            <div className="p-5 border border-white/5 bg-black/40 group hover:border-primary/40 transition-all duration-300 rounded-md">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">clinical_notes</span>
                                <h3 className="text-white font-display font-bold text-xs uppercase mb-2 tracking-widest">Participate in Guided Sessions</h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed">
                                    Engage in deep-dive tasting sessions to understand flavor profiles.
                                </p>
                            </div>

                            <div className="p-5 border border-white/5 bg-black/40 group hover:border-primary/40 transition-all duration-300 rounded-md">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">psychology</span>
                                <h3 className="text-white font-display font-bold text-xs uppercase mb-2 tracking-widest">Interact with Master Blenders</h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed">
                                    Learn directly from our lead distillers and master blenders.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 text-gray-400 font-serif italic text-sm md:text-base max-w-3xl mx-auto">
                            This creates brand loyalty, consumer excitement, and a premium identity similar to international craft distilleries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperimentalCenters;
