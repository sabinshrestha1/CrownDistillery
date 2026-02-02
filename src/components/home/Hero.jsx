import React from 'react';
import experimentalVideo from '../../assets/images/ccc.gif';

const Hero = () => {
    return (
        <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-10 bg-black">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={experimentalVideo}
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 filter brightness-75"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90"></div>

                {/* Gold Glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[160px] opacity-30 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-600/20 via-transparent to-transparent opacity-30 pointer-events-none"></div>
            </div>

            {/* Content placeholder */}
            <div className="relative z-20 flex-grow"></div>

            {/* Bottom Gold Line */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30 hidden lg:block">
                <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
        </header>
    );
};

export default Hero;
