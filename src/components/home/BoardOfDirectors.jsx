import React from 'react';
import MinrajImg from "../../assets/images/Minraj.webp";
import AmbikaImg from "../../assets/images/Ambika.webp";
import SaileshImg from "../../assets/images/Sailesh.webp";
import PrakashImg from "../../assets/images/Prakash.webp";
import BhumikaImg from "../../assets/images/Bhumika.webp";
import NarendraImg from "../../assets/images/Narendra.webp";

const BoardOfDirectors = () => {
    const directors = [
        { name: "Minraj Bhusal", title: "Chairman", image: MinrajImg },
        { name: "Ambika Prasad Paudel", title: "Managing Director", image: AmbikaImg },
        { name: "Er. Sailesh Acharya", title: "Director", image: SaileshImg },
        { name: "Prakash Bhusal", title: "Director", image: PrakashImg },
        { name: "Bhumika Shah", title: "Director", image: BhumikaImg },
        { name: "Narendra Tiwari", title: "Company Secretary", image: NarendraImg },
    ];


    return (
        <section className="relative py-24 bg-wood-dark border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-4">Leadership</span>
                    <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider">Board of Directors</h2>
                    <div className="w-24 h-0.5 bg-primary mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {directors.map((director, index) => (
                        <div key={index} className="group relative">
                            <div className="relative overflow-hidden aspect-[3/4] border border-white/10 bg-black/20">
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-24 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-display text-xl tracking-wide">{director.name}</h3>
                                    <p className="text-primary text-xs uppercase tracking-widest mt-1">{director.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardOfDirectors;
