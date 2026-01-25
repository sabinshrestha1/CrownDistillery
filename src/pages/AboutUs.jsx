import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import BoardOfDirectors from '../components/home/BoardOfDirectors';
import ChairmanImg from "../assets/images/Minraj.webp";

const AboutUs = () => {
    return (
        <div className="pt-20 bg-background-dark">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <div className="absolute inset-0 bg-[url('/assets/images/luxury-bg.webp')] bg-cover bg-fixed bg-center"></div>
                </div>
                <div className="container mx-auto px-4 relative z-20 text-center scale-95 animate-fade-in">
                    <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 block animate-slide-up">Our Legacy</span>
                    <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tighter mb-8 leading-none">
                        Driven by <span className="text-primary">Passion</span>
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
            </section>

            {/* Company Info section */}
            <section className="py-32 bg-background-dark relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-7 space-y-10">
                            <div className="space-y-4">
                                <span className="text-primary text-xs font-bold tracking-widest uppercase">The Beginning</span>
                                <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide leading-tight">Mastering the Craft Since Inception</h2>
                            </div>

                            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300 font-serif leading-relaxed">
                                <p className="text-xl text-primary/80 font-medium italic border-l-4 border-primary pl-6">
                                    "We don't just make spirits; we bottle the essence of our heritage, the purity of our mountains, and the dedication of our people."
                                </p>
                                <p>
                                    Established with a singular vision to revolutionize the spirits industry in Nepal, Crown Distillery has evolved into a symbol of premium craftsmanship. Our journey is paved with innovation, yet rooted deeply in the traditional methods that ensure the soul of our spirits remains untouched.
                                </p>
                                <p>
                                    Our facility, located in the heart of Rupandehi, is a fusion of modern technology and artisanal expertise. Here, every batch is monitored with precision, ensuring that from grain to glass, the quality exceeds international standards.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 sticky top-32">
                            <div className="relative group p-8 border border-white/5 bg-wood-dark/30 backdrop-blur-sm shadow-2xl overflow-hidden">
                                <div className="absolute -right-20 -top-20 text-[200px] font-display text-white/5 pointer-events-none uppercase">CROWN</div>
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-display text-xl tracking-widest">PURE QUALITY</h4>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest">Zero Compromise Policy</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-3xl">public</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-display text-xl tracking-widest">GLOBAL VISION</h4>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest">Nepal on the Global Map</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-display text-xl tracking-widest">SUSTAINABLE</h4>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest">Community Driven Growth</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Message from Chairman */}
            <section className="py-32 bg-wood-dark border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 md:gap-24">
                        <div className="w-full md:w-2/5 flex flex-col justify-center">
                            <div className="relative">
                                <div className="absolute -inset-6 border border-primary/20 scale-105 rounded-tr-[100px] rounded-bl-[100px] -z-10"></div>
                                <div className="aspect-[3/4] overflow-hidden border border-white/10 rounded-tr-[80px] rounded-bl-[80px] shadow-2xl shadow-primary/5">
                                    <img
                                        src={ChairmanImg}
                                        alt="Minraj Bhusal - Chairman"
                                        className="w-full h-full object-cover transition-all duration-1000"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col justify-center space-y-10">
                            <div>
                                <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Leadership Message</span>
                                <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide">Minraj Bhusal</h2>
                                <p className="text-primary text-sm uppercase tracking-[0.2em] mt-2">Chairman, Crown Reserve Distillery</p>
                            </div>

                            <div className="text-gray-200 font-serif text-xl leading-relaxed relative bg-white/5 p-10 border border-white/10 backdrop-blur-md rounded-2xl shadow-inner">
                                <span className="absolute -left-4 -top-8 text-8xl text-primary/20 font-serif">"</span>
                                <div className="space-y-6">
                                    <p>
                                        Our goal at Crown Reserve Distillery is not just to produce premium spirits, but to craft experiences that last a lifetime. Every bottle we produce is a testament to the hard work of our team and the incredible resources of our nation.
                                    </p>
                                    <p className="text-lg text-gray-400">
                                        We believe in quality without compromise, and innovation driven by tradition. As we look to the future, we remain dedicated to putting Nepal on the global map of premium spirit production.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <div className="pb-32">
                <BoardOfDirectors />
            </div>
        </div>
    );
};

export default AboutUs;
