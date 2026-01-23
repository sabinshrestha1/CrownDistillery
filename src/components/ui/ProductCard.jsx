import React, { useState } from 'react';

const ProductCard = ({ name, image, series, description, rating = "★★★★★", tag = "Collector's Choice", className = "", flavors = [] }) => {
    const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);

    // Determine current display values
    const currentImage = flavors.length > 0 ? flavors[activeFlavorIndex].image : image;
    const currentName = flavors.length > 0 && flavors[activeFlavorIndex].name ? `${name} (${flavors[activeFlavorIndex].name})` : name;

    return (
        <div className={`group relative card-gradient border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 ${className}`}>
            <div className="h-80 overflow-hidden flex items-center justify-center bg-[#0a0a0a] border border-primary/20 group-hover:border-primary/60 transition-colors relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(212,175,55,0.2)_0%,_transparent_75%)]"></div>

                <img
                    alt={currentName}
                    className="h-[85%] w-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500 relative z-10"
                    src={currentImage}
                />
            </div>
            <div className="px-6 pt-4 pb-12">
                <span className="text-[10px] tracking-widest text-primary/70 uppercase font-sans">{series}</span>
                <h4 className="font-display text-2xl text-primary mt-1 mb-2">{currentName}</h4>
                <p className="font-serif text-sm text-gray-400 leading-relaxed mb-6">{description}</p>

                {flavors.length > 0 && (
                    <div className="flex gap-2 mb-4">
                        {flavors.map((flavor, index) => (
                            <button
                                key={index}
                                onClick={(e) => { e.preventDefault(); setActiveFlavorIndex(index); }}
                                className={`w-6 h-6 rounded-full border border-white/20 transition-all ${activeFlavorIndex === index ? 'scale-110 ring-2 ring-primary' : 'hover:scale-110 opacity-70 hover:opacity-100'}`}
                                style={{ backgroundColor: flavor.color || '#333' }}
                                title={flavor.name}
                            ></button>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-1 mt-6">
                    <span className="text-primary text-sm">{rating}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest ml-2 font-sans">{tag}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
