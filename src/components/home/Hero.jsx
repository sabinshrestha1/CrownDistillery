import React from 'react';
import crownLogo from '../../assets/images/Crown logo.webp';
import experimentalVideo from '../../assets/images/video.mp4';

const Hero = () => {
    return (
        <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-10 bg-black">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                >
                    <source src={experimentalVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
            </div>

            {/* Content Removed as per user request - Video Only */}
            <div className="relative z-20 flex-grow"></div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block">
                <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
        </header>
    );
};

export default Hero;
