import React, { useEffect } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import bgImg from '../assets/images/himalayan_bg.png';
import mugg from '../assets/images/mugg.webp';

const OurStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen pt-20 bg-black overflow-hidden">

            {/* Global Gold Glow Backgrounds */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-yellow-500/20 via-yellow-600/10 to-transparent blur-3xl opacity-30"></div>
            <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-radial from-yellow-400/20 via-yellow-500/10 to-transparent blur-3xl opacity-30"></div>
            <div className="absolute -bottom-40 left-1/3 w-[800px] h-[800px] bg-gradient-radial from-yellow-500/20 via-yellow-600/10 to-transparent blur-3xl opacity-20"></div>

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                
                {/* Soft Gold Outline */}
                <div className="absolute -inset-2 border-2 border-yellow-500/20 rounded-xl blur-sm"></div>

                <div className="absolute inset-0 z-0 text-center">
                    <img
                        src={bgImg}
                        alt="Himalayan Background"
                        className="w-full h-full object-cover lg:scale-110 brightness-75 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-yellow-400/5 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-primary mb-12"></div>
                        <span className="text-primary text-xs font-bold tracking-[0.6em] uppercase mb-6 block animate-fade-in">
                            Established 2053
                        </span>
                        <h1 className="font-display text-6xl md:text-9xl text-white uppercase tracking-tighter mb-8 leading-none">
                            Our <span className="text-primary">Heritage</span>
                        </h1>
                        <p className="font-serif italic text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-80">
                            "From Nepal to global markets — excellence in every drop."
                        </p>
                    </div>
                </div>
            </section>

            {/* The Foundation */}
            <section className="py-32 relative overflow-hidden">
                
                {/* Soft Gold Outline */}
                <div className="absolute -inset-4 border-2 border-yellow-500/20 rounded-xl blur-sm"></div>
                <div className="absolute -inset-8 bg-yellow-500/10 blur-3xl rounded-xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        {/* Text Content */}
                        <div className="space-y-12">
                            <div className="flex items-start gap-8">
                                <div className="w-[1px] h-20 bg-primary/40 mt-4"></div>
                                <div className="space-y-8">
                                    <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide leading-tight">
                                        Crown Reserve <br />Distillery Limited
                                    </h2>

                                    <p className="text-gray-400 font-serif text-lg leading-relaxed">
                                        Crown Reserve Distillery Limited (CRDL) is a premium distillery company focused on producing world-class Whisky, Vodka, Rum (Starter, Medium, Premium), and RTDs.
                                    </p>

                                    <p className="text-gray-400 font-serif text-lg leading-relaxed">
                                        With modern distillation technology, strong branding, and a multi-market expansion strategy, CRDL aims to be one of Nepal’s most innovative and globally competitive distilleries.
                                    </p>

                                    <p className="text-primary font-serif italic text-xl leading-relaxed pt-4">
                                        Crafted with precision. Aged with patience. Designed for the world.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 border border-primary/20 translate-x-8 translate-y-8 -z-10"></div>
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={mugg}
                                    alt="Crown Reserve Distillery"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-12 -left-12 bg-black p-12 border border-white/5 shadow-2xl z-20 hidden md:block">
                                <span className="block text-6xl font-display text-primary font-bold">25+</span>
                                <span className="block text-xs uppercase tracking-[0.3em] text-gray-500 mt-2">
                                    Years of Excellence
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Craft */}
            <section className="relative py-48 overflow-hidden bg-black">

                {/* Gold Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1200] to-black"></div>

                {/* Soft Gold Glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[160px] opacity-40"></div>

                {/* Top Gold Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-48 bg-gradient-to-b from-primary to-transparent"></div>

                <div className="relative container mx-auto px-4 text-center z-10">
                    <SectionHeader
                        title="The Craft"
                        subtitle="A precise journey from raw ingredients to refined excellence."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-32 max-w-6xl mx-auto">

                        {/* Stage 1 */}
                        <div className="flex flex-col items-center space-y-8 group">
                            <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <span className="text-primary text-2xl font-bold">01</span>
                            </div>
                            <div className="w-[1px] h-12 bg-primary/30"></div>
                            <h3 className="font-display text-2xl text-white uppercase tracking-widest">
                                Fermentation
                            </h3>
                            <p className="text-gray-400 font-serif px-6">
                                Carefully selected grains are combined with pure water and yeast. Natural sugars convert into alcohol, forming the foundation of every spirit.
                            </p>
                        </div>

                        {/* Stage 2 */}
                        <div className="flex flex-col items-center space-y-8 group">
                            <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <span className="text-primary text-2xl font-bold">02</span>
                            </div>
                            <div className="w-[1px] h-12 bg-primary/30"></div>
                            <h3 className="font-display text-2xl text-white uppercase tracking-widest">
                                Distillation
                            </h3>
                            <p className="text-gray-400 font-serif px-6">
                                The liquid is heated in copper pot stills or advanced columns. Vapors rise, separate, and refine to achieve exceptional clarity and character.
                            </p>
                        </div>

                        {/* Stage 3 */}
                        <div className="flex flex-col items-center space-y-8 group">
                            <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <span className="text-primary text-2xl font-bold">03</span>
                            </div>
                            <div className="w-[1px] h-12 bg-primary/30"></div>
                            <h3 className="font-display text-2xl text-white uppercase tracking-widest">
                                Maturation & Bottling
                            </h3>
                            <p className="text-gray-400 font-serif px-6">
                                Spirits are aged in selected barrels for depth and complexity. Each batch is blended, filtered, and bottled under strict quality standards.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurStory;
