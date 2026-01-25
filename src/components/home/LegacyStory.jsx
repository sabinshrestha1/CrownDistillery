import React from 'react';

const LegacyStory = () => {
    return (
        <section className="relative pb-24 pt-40 bg-wood-dark overflow-hidden mt-0 scroll-mt-50" id="story">

            <div className="absolute top-0 left-0 w-full h-full">
                <img alt="Cellar Background" className="w-full h-full object-cover opacity-10 filter sepia brightness-50" src="https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-right lg:text-left">
                        <div className="inline-block border-l-4 border-primary pl-6 py-2 mb-12">
                            <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-none">
                                LEGACY IN <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600 uppercase">Rust & Gold</span>
                            </h2>
                        </div>

                        <p className="font-serif text-gray-400 mb-6 leading-loose text-lg font-light">
                            Our journey began over a century ago in the heart of the valley. Crown Reserve isn't just a distillery; it's a testament to patience. We believe that true character is forged in the dark, quiet corners of our rickhouses, where the angel's share is paid and the spirit matures.
                        </p>

                        <p className="font-serif text-gray-400 mb-10 leading-loose text-lg font-light">
                            Every barrel is hand-selected, every bottle hand-filled. We honor the rusty hoops that bind our casks and the golden liquid that flows from them. This is spirits without compromise.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 border-t border-white/5 pt-8">
                            <div className="text-center lg:text-left">
                                <span className="text-primary text-2xl mb-2 block">🔥</span>
                                <h4 className="text-white font-display text-sm uppercase tracking-widest">Deep Char</h4>
                                <p className="text-gray-500 text-xs mt-1">Level 4 alligator char for smoky depth.</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="text-primary text-2xl mb-2 block">✨</span>
                                <h4 class="text-white font-display text-sm uppercase tracking-widest">High Rye</h4>
                                <p className="text-gray-500 text-xs mt-1">A spicy, bold mash bill from local grains.</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="text-primary text-2xl mb-2 block">⏳</span>
                                <h4 className="text-white font-display text-sm uppercase tracking-widest">Slow Aged</h4>
                                <p className="text-gray-500 text-xs mt-1">Minimum 8 years in heat-cycled houses.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                            <div className="absolute inset-0 border-2 border-primary/30 transform translate-x-4 translate-y-4 z-0"></div>
                            <img alt="Distillery Interior" className="relative w-full h-full object-cover z-10 shadow-2xl filter brightness-90 contrast-125 rounded-sm" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" />

                            <div className="absolute -bottom-10 -right-10 md:-left-10 bg-black p-6 border border-primary/20 shadow-2xl z-20 max-w-[200px] backdrop-blur-md">
                                <span className="block text-4xl font-display text-primary font-bold mb-1">25+</span>
                                <span className="block text-xs uppercase tracking-widest text-gray-400 font-sans leading-tight">Years of Master Distilling</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LegacyStory;
