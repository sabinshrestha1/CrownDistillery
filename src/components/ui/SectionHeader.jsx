import React from 'react';

const SectionHeader = ({ title, subtitle, className = "" }) => {
    return (
        <div className={`text-center mb-20 ${className}`}>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6 relative inline-block">
                <span className="relative z-10">{title}</span>
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </h2>
            {subtitle && (
                <p className="font-serif italic text-gray-400 text-xl max-w-3xl mx-auto mt-6" dangerouslySetInnerHTML={{ __html: subtitle }} />
            )}
        </div>
    );
};

export default SectionHeader;
