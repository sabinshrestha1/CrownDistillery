import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';

// Import images
import thar from '../../assets/images/thar.webp';
import victa from '../../assets/images/victa.webp';
import saaqi from '../../assets/images/saaqi.webp';
import picnic from '../../assets/images/picnic.webp';
import tilicho from '../../assets/images/tilicho.webp';
import cannabis from '../../assets/images/cannabis.webp';
import khurpa from '../../assets/images/khurpa.webp';
import koseli from '../../assets/images/koseli.webp';
import spicegin from '../../assets/images/spicegin.webp';
import bouncer from '../../assets/images/bouncer.webp';
import tequila from '../../assets/images/tequila.webp';
import ruchi from '../../assets/images/ruchi.webp';
import pukar from '../../assets/images/pukar.webp';
import smooch from '../../assets/images/smooch.webp';
import breezer from '../../assets/images/breezer.webp';
import glider from '../../assets/images/glider.webp';
import eden from '../../assets/images/eden.webp';
import blue from '../../assets/images/blue.webp';
import spark from '../../assets/images/spark.webp';
import sufi from '../../assets/images/sufi.webp';
import nilheera from '../../assets/images/nilheera.webp';

const SpiritsGallery = () => {
    return (
        <section className="relative py-32 bg-background-dark text-white" id="spirits">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-color-dodge pointer-events-none"></div>
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <SectionHeader
                    title="Our Spirits Gallery"
                    subtitle="From our foundational Starter Series to the exquisite Premium Collection. <br class='hidden md:block'/>Explore the depth of our cellars across Whisky, Vodka, Gin, and Rum."
                />

                {/* WHISKY SERIES */}
                <div className="mb-32 mt-20">
                    <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-4 mb-10">
                        <div>
                            <span className="font-sans text-xs text-primary font-bold tracking-[0.3em] uppercase block -mt-6 mb-4">The Heritage</span>
                            <h3 className="font-display text-4xl text-white">Whisky Series</h3>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0 font-sans text-xs text-gray-500 uppercase tracking-widest">
                            <span>Premium</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductCard name="Himalayan Thar" image={thar} series="Premium Series" description="Premium blended Scotch, inspired by the Himalayas." />
                        <ProductCard name="VICTA Deluxe" image={victa} series="Premium Series" description="Smooth, premium whisky defined by balance and elegance." />
                        <ProductCard name="SAAQI" image={saaqi} series="Premium Series" description="An ancient melody, a modern spirit. Rich, aromatic, and deep." />
                        <ProductCard name="PICNIC" image={picnic} series="Premium Series" description="Sunshine in a bottle. Light, refreshing, and adventurous." />
                    </div>
                </div>

                {/* VODKA & RUM SERIES */}
                <div className="mb-32 mt-20">
                    <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-4 mb-10">
                        <div>
                            <span className="font-sans text-xs text-primary font-bold tracking-[0.3em] uppercase block -mt-6 mb-4">The Specialties</span>
                            <h3 className="font-display text-4xl text-white">Vodka & Rum Series</h3>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0 font-sans text-xs text-gray-500 uppercase tracking-widest">
                            <span>Premium Selection</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductCard name="Tilicho Vodka" image={tilicho} series="Clear Series • Triple Distilled" description="Distilled in the Himalayas, infused with bold cannabis notes for a smooth, elevated experience." />
                        <ProductCard name="HIMALAYAN Cannabis" image={cannabis} series="Infused Series" description="Pure Himalayan spirit meeting the wild essence of the mountains for a unique botanical finish." />
                        <ProductCard name="Khurpa" image={khurpa} series="Premium Deluxe" description="A rich Himalayan rum, aged for depth and crafted for smooth indulgence." />
                        <ProductCard name="Koseli" image={koseli} series="Heritage Blend" description="A gift from the hills. A masterfully blended rum with a warm, spiced character." />
                    </div>
                </div>

                {/* GIN & TEQUILA */}
                <div className="mb-32 mt-20">
                    <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-4 mb-10">
                        <div>
                            <span className="font-sans text-xs text-primary font-bold tracking-[0.3em] uppercase block -mt-6 mb-4">Clear Spirits</span>
                            <h3 className="font-display text-4xl text-white">Gin & Tequila</h3>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0 font-sans text-xs text-gray-500 uppercase tracking-widest">
                            <span>Botanical & Pure</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductCard name="Spice Gin" image={spicegin} series="London Extra Dry" description="A complex botanical journey with a warm, peppery finish. The ultimate gin for the modern connoisseur." tag="Aromatic Choice" />
                        <ProductCard name="BOUNCER" image={bouncer} series="Extra Dry" description="Sharp, crisp, and unapologetically clean. A high-energy spirit with a smooth, dry edge." tag="Pure Intensity" />
                        <div className="lg:col-span-2">
                            <ProductCard className="h-full" name="TEQUILA WHITE" image={tequila} series="Agave Spirit" description="Clear as mountain water. A vibrant agave spirit crafted for smooth shots and premium cocktails. The perfect balance of tradition and modern purity." tag="Crystal Pure" />
                        </div>
                    </div>
                </div>

                {/* FRUIT FLAVORED */}
                <div className="mb-32 mt-20">
                    <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-4 mb-10">
                        <div>
                            <span className="font-sans text-xs text-primary font-bold tracking-[0.3em] uppercase block -mt-6 mb-4">The Collection</span>
                            <h3 className="font-display text-4xl text-white">Fruit Flavored Series</h3>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0 font-sans text-xs text-gray-500 uppercase tracking-widest">
                            <span>Vibrant & Refreshing</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductCard
                            name="Ruchi"
                            image={ruchi}
                            series="Traditional Fruit"
                            description="A classic taste of the orchards, balanced with a smooth, sweet finish."
                            tag="Popular Choice"
                            flavors={[
                                { name: 'Mango', color: '#FFD700', image: ruchi },
                                { name: 'Lychee', color: '#ffb7b2', image: ruchi },
                                { name: 'Strawberry', color: '#ff69b4', image: ruchi }
                            ]}
                        />
                        <ProductCard
                            name="Pukar"
                            image={pukar}
                            series="Bold Spirit"
                            description="The calling of nature. Intense fruit essence with a spirited Himalayan heart."
                            flavors={[
                                { name: 'Orange', color: '#FFA500', image: pukar },
                                { name: 'Pineapple', color: '#FFE600', image: pukar }
                            ]}
                        />
                        <ProductCard name="SMOOCH" image={smooch} series="Fusion Series" description="A playful kiss of exotic fruits. Light, vibrant, and made for the moment." tag="Party Favorite" />
                        <ProductCard name="BREEZER" image={breezer} series="Tropical Chill" description="The ultimate refresher. Crisp, cool, and bursting with tropical energy." tag="The Chill Pick" />
                    </div>
                </div>

                {/* VODKA & GIN SERIES (Signature) */}
                <div className="mb-32 mt-20 px-4 max-w-[1600px] mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-6 mb-12">
                        <div>
                            <span className="font-sans text-xs text-primary font-bold tracking-[0.4em] uppercase block -mt-6 mb-4">The Collection</span>
                            <h3 className="font-display text-5xl text-white uppercase tracking-wider">Vodka & Gin Series</h3>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0 font-sans text-xs text-gray-500 uppercase tracking-widest">
                            <span>6 Signature Masterpieces</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <ProductCard name="GLIDER" image={glider} series="Smooth Vodka" description="Effortlessly light with a soaring, crystalline finish." tag="Premium Quality" />
                        <ProductCard name="EDEN" image={eden} series="Botanical Gin" description="A crisp, floral garden captured in every drop." tag="Premium Quality" />
                        <ProductCard name="BLUE SKY" image={blue} series="Extra Dry Vodka" description="Purity defined. A crisp, horizon-wide experience." tag="Premium Quality" />
                        <ProductCard name="SPARK" image={spark} series="Vibrant Spirit" description="Ignite the night with electric purity and energy." tag="Premium Quality" />
                        <ProductCard name="SAUFI" image={sufi} series="Aromatic Vodka" description="Smooth, cooling, and deeply aromatic satisfaction." tag="Premium Quality" />
                        <ProductCard name="NILHEERA" image={nilheera} series="Signature Series" description="The pinnacle of flavor and crystal-clear luxury." tag="Premium Quality" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SpiritsGallery;
