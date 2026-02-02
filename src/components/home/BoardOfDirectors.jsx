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
        { name: "Ambika Prasad Paudel", title: "Director", image: AmbikaImg },
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

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-7xl mx-auto px-4">
                    {directors.map((director, index) => (
                        <div key={index} className="group relative flex flex-col items-center text-center">
                            <div className="relative overflow-hidden aspect-square rounded-full border border-white/10 bg-black/20 mb-4 max-w-[150px] w-full">
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-white font-display text-xs tracking-wider font-bold group-hover:text-primary transition-colors">{director.name}</h3>
                                <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em]">{director.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardOfDirectors;
