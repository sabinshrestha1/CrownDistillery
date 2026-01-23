import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';

// Import images (ensure paths are correct relative to this new file)
import thar from '../../assets/images/thar.webp';
import victa from '../../assets/images/victa.webp';
import saaqi from '../../assets/images/saaqi.webp';

const PremiumShowcase = () => {
    return (
        <section className="relative py-24 bg-background-dark text-white">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <SectionHeader
                    title="The Premium Collection"
                    subtitle="Experience the pinnacle of our craftsmanship. <br/>Selected purely for the connoisseur."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ProductCard
                        name="Himalayan Thar"
                        image={thar}
                        series="Premium Series"
                        description="Premium blended Scotch, inspired by the Himalayas."
                        tag="Signature"
                    />
                    <ProductCard
                        name="VICTA Deluxe"
                        image={victa}
                        series="Premium Series"
                        description="Smooth, premium whisky defined by balance and elegance."
                        tag="Best Seller"
                    />
                    <ProductCard
                        name="SAAQI"
                        image={saaqi}
                        series="Premium Series"
                        description="An ancient melody, a modern spirit. Rich, aromatic, and deep."
                        tag="Connoisseur's Choice"
                    />
                </div>

                <div className="mt-16 text-center">
                    <a href="/spirits" className="inline-block border border-primary text-primary px-8 py-3 font-display uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                        View Complete Gallery
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PremiumShowcase;
