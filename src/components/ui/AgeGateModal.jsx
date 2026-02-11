import React, { useState, useEffect } from 'react';

const AgeGateModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 1. Check path - don't show on restricted page
        if (window.location.pathname === '/not-allowed') {
            return;
        }

        // 2. Crawler Bypass
        const userAgent = navigator.userAgent.toLowerCase();
        const isBot = /googlebot|bingbot|yandex|baiduspider|duckduckgo|slurp|facebot|facebookexternalhit|twitterbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|ia_archiver|sogou|exabot/.test(userAgent);

        if (isBot) {
            return; // Don't show modal for bots
        }

        // 2. Check localStorage
        const verified = localStorage.getItem('age_verified') === 'true';
        const verifiedAt = localStorage.getItem('age_verified_at');
        const now = Date.now();
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;

        // If verified and less than 30 days ago
        if (verified && verifiedAt && (now - parseInt(verifiedAt) < thirtyDays)) {
            return; // Don't show modal
        }

        setIsVisible(true);
    }, []);

    const handleYes = () => {
        localStorage.setItem('age_verified', 'true');
        localStorage.setItem('age_verified_at', Date.now().toString());
        setIsVisible(false);
    };

    const handleNo = () => {
        window.location.href = "/not-allowed";
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
            <div className="bg-wood-dark/90 border border-primary/30 p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative">
                <div className="mb-8">
                    <span className="font-display text-3xl md:text-4xl text-primary font-bold tracking-widest block mb-2">
                        CROWN RESERVE
                    </span>
                    <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase">Distillery</span>
                </div>

                <h2 id="age-gate-title" className="text-white font-serif text-2xl mb-6">Age Verification</h2>
                <p className="text-gray-300 mb-8 font-light">
                    You must be of legal drinking age in your country to enter this site.
                </p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleYes}
                        className="w-full bg-primary text-black font-bold uppercase tracking-[0.2em] py-4 hover:bg-white transition-colors duration-300"
                    >
                        Yes, I am 18+
                    </button>
                    <button
                        onClick={handleNo}
                        className="w-full border border-gray-600 text-gray-400 font-bold uppercase tracking-[0.2em] py-3 hover:border-white hover:text-white transition-colors duration-300 text-sm"
                    >
                        No, I am under 18
                    </button>
                </div>

                <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-8">
                    By entering this site, you agree to our Terms of Service.
                </p>
            </div>
        </div>
    );
};

export default AgeGateModal;
