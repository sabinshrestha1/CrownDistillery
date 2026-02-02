import React from 'react';
import { Link } from 'react-router-dom';
// Import images
import thar from '../../assets/images/thar.webp';
import victa from '../../assets/images/victa.webp';
import saaqi from '../../assets/images/saaqi.webp';
import bgImg from '../../assets/images/himalayan_bg.png';

const products = [
    {
        name: "Himalayan Thar",
        image: thar,
        series: "Premium Series",
        description: "Premium blended whiskey, inspired by the Himalayas. A testament to rugged beauty and refined taste. Experience the spirit of the peaks in every drop.",
        tag: "Signature Reserve",
        abv: "42.8% ALC/VOL",
        temperature: "| 25°up",  // <-- added temperature

        url: "/spirits/himalayan-thar"
    },
    {
        name: "VICTA Deluxe",
        image: victa,
        series: "Premium Series",
        description: "Smooth, premium whisky defined by balance and elegance. Crafted for those who appreciate the finer details of master blending.",
        tag: "Best Seller",
        abv: "42.8% ALC/VOL",
        temperature: "| 40°up",  // <-- added temperature
        url: "/spirits/victa-deluxe"
    },
    {
        name: "SAAQI",
        image: saaqi,
        series: "Premium Series",
        description: "An ancient melody, a modern spirit. Rich, aromatic, and deep, capturing the essence of tradition for the modern palate.",
        tag: "Customer's Choice",
        abv: "42.8% ALC/VOL",
        temperature: "| 25°up",  // <-- added temperature

        url: "/spirits/saaqi"
    }
];

const PremiumShowcase = () => {
    return (
        <section className="bg-background-dark relative overflow-hidden">

            {/* Global Soft Gold Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-yellow-500/10 blur-[200px] opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/3 w-[800px] h-[800px] bg-yellow-400/10 blur-[180px] opacity-30 pointer-events-none"></div>

            <div className="pt-24 pb-16 flex flex-col items-center relative z-10">
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-primary/50 mb-8"></div>
                <div className="mt-8 text-primary/60 font-display tracking-[1.2em] text-[14px] uppercase">
                    The Premium Collection
                </div>
            </div>

            <div className="flex flex-col relative z-10">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className={`relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden 
                            ${idx % 2 === 1 ? 'bg-[#0a0a0a]' : 'bg-background-dark'}
                            rounded-xl border-2 border-yellow-500/20 mx-4 md:mx-16 lg:mx-24 my-12`}
                    >
                        {/* Background Image with Darkened Mountain and Glow */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <img
                                src={bgImg}
                                alt=""
                                className={`w-full h-full object-cover filter grayscale contrast-125 brightness-50 ${idx % 2 === 1 ? 'scale-x-[-1]' : ''}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background-dark/90 to-black/80"></div>
                        </div>

                        <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10 py-20">
                            <div className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-12 lg:gap-24`}>
                                <div className={`w-full md:w-1/2 text-center ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                                    <span className="text-xs font-sans tracking-[0.5em] text-primary font-bold uppercase mb-4 block">
                                        {product.tag}
                                    </span>
                                    <h2 className="text-[2.5rem] md:text-[4rem] font-display font-medium text-white leading-tight mb-8">
                                        {product.name}
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-400 font-serif leading-relaxed mb-12 max-w-xl mx-auto md:mx-0 italic">
                                        {product.description}
                                    </p>
                                    <div className={`flex flex-col ${idx % 2 === 1 ? 'md:items-end' : 'md:items-start'} gap-4`}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-[1px] h-4 bg-primary/40"></div>
                                            <span className="text-[12px] tracking-[0.4em] text-primary/80 uppercase font-sans font-medium">
                                                {product.abv}
                                            </span>
                                            {product.temperature && (
                                                <span className="text-[12px] tracking-[0.4em] text-primary/80 uppercase font-sans font-medium ml-2">
                                                    {product.temperature}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex justify-center items-center relative">
                                    <div className="relative group max-w-[450px] w-full cursor-pointer">
                                        {/* Golden Glow Behind Image */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none"></div>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_40px_50px_rgba(0,0,0,0.8)] transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-8 group-hover:drop-shadow-[0_60px_80px_rgba(0,0,0,0.9)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Explore Full Gallery */}
                <div className="relative py-48 overflow-hidden group rounded-xl border-2 border-yellow-500/20 mx-4 md:mx-16 lg:mx-24 my-12">
                    <div className="absolute inset-0 bg-[#0a0a0a] z-0 rounded-xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-yellow-400/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="mb-12 flex flex-col items-center">
                            <h3 className="text-3xl md:text-5xl font-display text-white/90 mb-6 tracking-wider">
                                Discover the Full <span className="text-primary">Reserve</span>
                            </h3>
                            <p className="font-serif italic text-gray-500 max-w-lg mx-auto mb-12">
                                From our foundational series to rare limited editions, explore the depth of our distillery's craftsmanship.
                            </p>
                        </div>
                        <Link
                            to="/spirits"
                            className="relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-display font-medium tracking-[0.3em] text-primary transition duration-500 ease-out border-2 border-primary rounded-sm group/btn hover:text-black"
                        >
                            <span className="absolute inset-x-0 bottom-0 transition-all duration-500 ease-out bg-primary h-0 group-hover/btn:h-full"></span>
                            <span className="relative uppercase text-xs">Explore the Gallery</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumShowcase;
