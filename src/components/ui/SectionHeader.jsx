import React from 'react';
import crownLogo from '../../assets/images/Crown logo.webp';

const SectionHeader = ({ title, subtitle, className = "" }) => {
    return (
        <div className={`text-center mb-20 ${className}`}>
            <div className="flex items-center justify-center gap-6 mb-6">
                <h2 className="font-display text-5xl md:text-7xl text-white relative inline-block">
                    <span className="relative z-10">{title}</span>
                    <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                </h2>
            </div>
            {subtitle && (
                <p className="font-serif italic text-gray-400 text-xl max-w-3xl mx-auto mt-6" dangerouslySetInnerHTML={{ __html: subtitle }} />
            )}
        </div>
    );
};

export default SectionHeader;
