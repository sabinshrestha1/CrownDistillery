import React from 'react';

const SectionHeader = ({ title, subtitle, className = "" }) => {
    return (
        <div className={`relative text-center mb-20 py-16 px-6 ${className}`}>
            {/* Subtle Gold Outline/Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 border border-primary/20 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 blur-[120px] opacity-30 rounded-full"></div>
            </div>

            <div className="flex flex-col items-center justify-center mb-6 relative z-10">
                {/* Vertical gold line */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary mb-8"></div>

                {/* Title */}
                <h2 className="font-display text-5xl md:text-7xl text-white relative inline-block">
                    <span className="relative z-10">{title}</span>
                </h2>
            </div>

            {/* Subtitle */}
            {subtitle && (
                <p
                    className="font-serif italic text-gray-400 text-xl max-w-3xl mx-auto mt-6 relative z-10"
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />
            )}
        </div>
    );
};

export default SectionHeader;
