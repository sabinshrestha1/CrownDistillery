import React, { useState, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import ProductCard from "../ui/ProductCard";

// Import images
import thar from "../../assets/images/thar.webp";
import victa from "../../assets/images/victa.webp";
import saaqi from "../../assets/images/saaqi.webp";
import picnic from "../../assets/images/picnic.webp";
import cannabis from "../../assets/images/cannabis.webp";
import khurpa from "../../assets/images/khurpa.webp";
import koseli from "../../assets/images/koseli.webp";
import spicegin from "../../assets/images/spicegin.webp";
import bouncer from "../../assets/images/bouncer.webp";
import tequila from "../../assets/images/tequila.webp";
import r_orange from "../../assets/images/r_orange.webp";
import r_litchi from "../../assets/images/r_litchi.webp";
import r_lemon from "../../assets/images/r_lemon.webp";
import p_orange from "../../assets/images/p_orange.webp";
import p_apple from "../../assets/images/p_apple.webp";
import p_litchi from "../../assets/images/p_litchi.webp";
import smooch from "../../assets/images/smooch.webp";
import bre_orange from "../../assets/images/bre_orange.webp";
import bre_litchi from "../../assets/images/bre_litchi.webp";
import bre_pineapple from "../../assets/images/bre_pineapple.webp";
import bre_strawberry from "../../assets/images/bre_strawberry.webp";
import himalayan_bg from "../../assets/images/himalayan_bg.png";
import glider from "../../assets/images/glider.webp";
import eden from "../../assets/images/eden.webp";
import blue from "../../assets/images/blue.webp";
import spark from "../../assets/images/spark.webp";
import sufi from "../../assets/images/sufi.webp";
import nilheera from "../../assets/images/nilheera.webp";

const ShowcaseSection = ({
  name,
  series,
  description,
  tag,
  flavors = [],
  bgImage,
  reverse = false,
}) => {
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);

  // Reset active flavor when flavors change
  useEffect(() => {
    const orangeIndex = flavors.findIndex((f) => f.name === "Orange");
    if (orangeIndex !== -1) setActiveFlavorIndex(orangeIndex);
    else setActiveFlavorIndex(0);
  }, [flavors]);

  const currentFlavor = flavors[activeFlavorIndex] || { name: "", image: "" };
  const prevFlavor =
    flavors[(activeFlavorIndex - 1 + flavors.length) % flavors.length];
  const nextFlavor = flavors[(activeFlavorIndex + 1) % flavors.length];

  const flavorColors = {
    Orange: "bg-orange-500",
    Litchi: "bg-pink-500",
    Pineapple: "bg-yellow-400",
    Strawberry: "bg-red-500",
    Apple: "bg-green-500",
    Lemon: "bg-yellow-300",
    "": "bg-white",
  };

  const displayName = currentFlavor.name
    ? `${name} - ${currentFlavor.name}`
    : name;

  return (
    <div
      className={`relative min-h-[650px] md:min-h-[820px] flex items-center overflow-hidden border-b border-white/5 ${reverse ? "bg-[#0a0a0a]" : "bg-background-dark"
        }`}
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src={bgImage || himalayan_bg}
          alt=""
          className={`w-full h-full object-cover filter grayscale contrast-125 ${reverse ? "scale-x-[-1]" : ""
            }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10 py-20">
        <div
          className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between gap-12 lg:gap-24`}
        >
          {/* TEXT */}
          <div
            className={`w-full md:w-1/2 text-center ${reverse ? "md:text-right" : "md:text-left"
              }`}
          >


            <h2 className="text-[2.5rem] md:text-[5rem] font-display font-medium text-white leading-tight mb-8 uppercase tracking-tight">
              {displayName}
            </h2>

            <p className="text-lg md:text-xl text-gray-400 font-serif leading-relaxed mb-12 max-w-xl mx-auto md:mx-0 italic">
              {description}
            </p>

            <div
              className={`flex flex-col ${reverse ? "md:items-end" : "md:items-start"
                } gap-4`}
            >
              <div className="flex items-center gap-4">
                <div className="w-[1px] h-4 bg-primary/40"></div>
                <span className="text-[12px] tracking-[0.4em] text-primary/80 uppercase font-sans font-medium">
                  {series}
                </span>
              </div>
            </div>
          </div>


          {/* IMAGE SLIDER */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative group max-w-[640px] w-full">
              {/* Animated Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[120px] rounded-full opacity-50"></div>

              {/* LEFT SIDE BAR */}
              {flavors.length > 1 && (
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl border border-white/20 overflow-hidden cursor-pointer transform transition-transform duration-700 hover:scale-105 z-20"
                  onClick={() =>
                    setActiveFlavorIndex(
                      (activeFlavorIndex - 1 + flavors.length) % flavors.length
                    )
                  }
                >
                  <img
                    src={prevFlavor?.image || currentFlavor.image}
                    alt={prevFlavor?.name || currentFlavor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                </button>
              )}

              {/* Center big image */}
              <div className="relative z-10 transform transition-all duration-900 ease-in-out">
                <img
                  src={currentFlavor.image || bgImage}
                  alt={displayName}
                />
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full text-center">
                  <span className="text-sm md:text-base font-sans tracking-[0.3em] text-primary font-bold uppercase drop-shadow-md">
                    {tag}
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE BAR */}
              {flavors.length > 1 && (
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl border border-white/20 overflow-hidden cursor-pointer transform transition-transform duration-700 hover:scale-105 z-20"
                  onClick={() =>
                    setActiveFlavorIndex(
                      (activeFlavorIndex + 1) % flavors.length
                    )
                  }
                >
                  <img
                    src={nextFlavor?.image || currentFlavor.image}
                    alt={nextFlavor?.name || currentFlavor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                </button>
              )}

              {/* DOTS */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {flavors.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFlavorIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all ${activeFlavorIndex === i
                      ? `${flavorColors[f.name]} scale-125`
                      : "bg-white/20"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

const SpiritsGallery = () => {
  return (
    <section
      className="relative py-32 bg-background-dark text-white"
      id="spirits"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-color-dodge pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          title="Our Spirits Gallery"
          subtitle="From our foundational Starter Series to the exquisite Premium Collection. <br class='hidden md:block'/>Explore the depth of our cellars across Whisky, Vodka, Gin, and Rum."
        />

        {/* WHISKY SERIES */}
        <div className="mb-32 mt-20">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10">
            <div className="flex items-start gap-6">
              <div className="w-[1px] h-16 bg-primary/40 mt-2"></div>
              <div>
                <span className="font-sans text-xs text-primary font-bold tracking-[0.3em] uppercase block mb-2">
                  The Heritage
                </span>
                <h3 className="font-display text-4xl text-white uppercase tracking-tight">
                  Whisky Series
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              name="Himalayan Thar"
              image={thar}
              series="Premium Series"
              description="Premium blended whiskey, inspired by the Himalayas."
              tag="| 25° UP"
            />
            <ProductCard
              name="VICTA Deluxe"
              image={victa}
              series="Premium Series"
              description="Smooth, premium whisky defined by balance and elegance."
              tag="| 40° UP"
            />
            <ProductCard
              name="SAAQI"
              image={saaqi}
              series="Premium Series"
              description="An ancient melody, a modern spirit. Rich, aromatic, and deep."
              tag="| 25° UP"
            />
            <ProductCard
              name="PICNIC"
              image={picnic}
              series="Medium Series"
              description="Sunshine in a bottle. Light, refreshing, and adventurous."
              tag="| 50° UP"
            />
          </div>
        </div>

        {/* VODKA & RUM SERIES */}
        <div className="mb-32 mt-20">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10">
            <div className="flex items-start gap-6">
              <div className="w-[1px] h-16 bg-primary/40 mt-2"></div>
              <div>
                <span className="font-sans text-xs text-primary font-bold tracking-[0.3em] uppercase block mb-2">
                  The Specialties
                </span>
                <h3 className="font-display text-4xl text-white uppercase tracking-tight">
                  Vodka & Rum Series
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              name="HIMALAYAN Cannabis"
              image={cannabis}
              series="Infused Series"
              description="Pure Himalayan spirit meeting the wild essence of the mountains for a unique botanical finish."
              tag="| 30° UP"
            />
            <ProductCard
              name="Khurpa"
              image={khurpa}
              series="Premium Deluxe"
              description="A rich Himalayan rum, aged for depth and crafted for smooth indulgence."
              tag="| 25° UP"
            />
            <ProductCard
              name="Koseli"
              image={koseli}
              series="Heritage Blend"
              description="A gift from the hills. A masterfully blended rum with a warm, spiced character."
              tag="| 40° UP"
            />
          </div>
        </div>

        {/* GIN & TEQUILA */}
        <div className="mb-32 mt-20">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10">
            <div className="flex items-start gap-6">
              <div className="w-[1px] h-16 bg-primary/40 mt-2"></div>
              <div>
                <span className="font-sans text-xs text-primary font-bold tracking-[0.3em] uppercase block mb-2">
                  Clear Spirits
                </span>
                <h3 className="font-display text-4xl text-white uppercase tracking-tight">
                  Gin & Tequila
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              name="Spice Gin"
              image={spicegin}
              series="London Extra Dry"
              description="A complex botanical journey with a warm, peppery finish."
              tag="| 30° UP"
            />
            <ProductCard
              name="BOUNCER"
              image={bouncer}
              series="Extra Dry"
              description="Sharp, crisp, and unapologetically clean."
              tag="| 70° UP"
            />
            <div className="lg:col-span-2">
              <ProductCard
                className="h-full"
                name="TEQUILA WHITE"
                image={tequila}
                series="Agave Spirit"
                description="Clear as mountain water. A vibrant agave spirit crafted for smooth shots and premium cocktails."
                tag="| 30° UP"
              />
            </div>
          </div>
        </div>

        {/* FRUIT FLAVORED SERIES */}
        <div className="mt-20">
          <div className="container mx-auto px-4 md:px-8 mb-12">
            <div className="flex flex-col md:flex-row items-end justify-between">
              <div className="flex items-start gap-6">
                <div className="w-[1px] h-16 bg-primary/40 mt-2"></div>
                <div>
                  <span className="font-sans text-xs text-primary font-bold tracking-[0.3em] uppercase block mb-2">
                    The Collection
                  </span>
                  <h3 className="font-display text-4xl text-white uppercase tracking-tight">
                    Fruit Flavoured RTD Series
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <ShowcaseSection
            name="BREEZER"
            tag="| 70° UP"
            series="Tropical Chill Series"
            description="The ultimate refresher. Crisp, cool, and bursting with tropical energy."
            flavors={[
              { name: "Pineapple", image: bre_pineapple },
              { name: "Orange", image: bre_orange },
              { name: "Litchi", image: bre_litchi },
              { name: "Strawberry", image: bre_strawberry },
            ]}
          />

          <ShowcaseSection
            name="Pukar"
            tag="| 70° UP"
            series="Himalayan Heart Series"
            description="Intense fruit essence with a spirited Himalayan heart."
            reverse={true}
            flavors={[
              { name: "Orange", image: p_orange },
              { name: "Apple", image: p_apple },
              { name: "Litchi", image: p_litchi },
            ]}
          />

          <ShowcaseSection
            name="Ruchi"
            tag="| 70° UP"
            series="Traditional Fruit Series"
            description="A classic taste of the orchards, balanced with a smooth, sweet finish."
            flavors={[
              { name: "Orange", image: r_orange },
              { name: "Litchi", image: r_litchi },
              { name: "Lemon", image: r_lemon },
            ]}
          />

          <ShowcaseSection
            name="SMOOCH"
            tag="| 70° UP"
            series="Vibrant Fusion Series"
            description="A playful kiss of exotic fruits. Light, vibrant, and made for the moment."
            flavors={[{ name: "", image: smooch }]}
            reverse={true}
          />
        </div>

        {/* VODKA & GIN SERIES */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 mt-32">
          <div className="mb-32 px-4 max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12">
              <div className="flex items-start gap-6">
                <div className="w-[1px] h-20 bg-primary mt-2"></div>
                <div>
                  <span className="font-sans text-xs text-primary font-bold tracking-[0.4em] uppercase block mb-3">
                    The Collection
                  </span>
                  <h3 className="font-display text-5xl text-white uppercase tracking-widest">
                    Vodka & Gin Series
                  </h3>
                </div>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0 font-sans text-xs text-gray-500 uppercase tracking-widest">
                <span>6 Signature Masterpieces</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <ProductCard
                name="GLIDER"
                image={glider}
                series="Smooth Vodka"
                description="Effortlessly light with a soaring, crystalline finish."
                tag="| 70° UP"
              />
              <ProductCard
                name="EDEN"
                image={eden}
                series="Botanical Gin"
                description="A crisp, floral garden captured in every drop."
                tag="| 70° UP"
              />
              <ProductCard
                name="BLUE SKY"
                image={blue}
                series="Extra Dry Vodka"
                description="Purity defined. A crisp, horizon-wide experience."
                tag="| 50° UP"
              />
              <ProductCard
                name="SPARK"
                image={spark}
                series="Vibrant Spirit"
                description="Ignite the night with electric purity and energy."
                tag="| 50° UP"
              />
              <ProductCard
                name="SAUFI"
                image={sufi}
                series="Aromatic Vodka"
                description="Smooth, cooling, and deeply aromatic satisfaction."
                tag="| 70° UP"
              />
              <ProductCard
                name="NILHEERA"
                image={nilheera}
                series="Signature Series"
                description="The pinnacle of flavor and crystal-clear luxury."
                tag="| 50° UP"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritsGallery;
