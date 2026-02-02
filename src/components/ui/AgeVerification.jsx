import React, { useState } from 'react';

const AgeVerification = ({ onVerify }) => {
    const [year, setYear] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentYear = new Date().getFullYear();
        const birthYear = parseInt(year);

        if (!birthYear || birthYear < 1900 || birthYear > currentYear) {
            setError('Please enter a valid year.');
            return;
        }

        const age = currentYear - birthYear;
        if (age >= 18) {
            onVerify();
        } else {
            setError('You must be 18+ to enter.');
        }
    };

    return (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]">
            <div className="absolute inset-0 bg-black/90"></div>

            <div className="relative z-10 p-8 md:p-12 max-w-md w-full bg-wood-dark/50 backdrop-blur-md border border-primary/20 text-center shadow-2xl">
                <div className="mb-8">
                    <span className="font-display text-3xl md:text-4xl text-primary font-bold tracking-widest block mb-2">
                        CROWN RESERVE
                    </span>
                    <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase">Distillery</span>
                </div>

                <h2 className="text-white font-serif text-xl mb-6">Are you of legal drinking age?</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="Enter Year of Birth (YYYY)"
                            className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 text-center tracking-widest focus:outline-none focus:border-primary transition-colors placeholder-gray-600"
                            maxLength={4}
                        />
                        {error && <p className="text-red-500 text-xs mt-2 tracking-wide uppercase font-bold animate-pulse">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-black font-bold uppercase tracking-[0.2em] py-3 hover:bg-white transition-colors duration-300"
                    >
                        Enter
                    </button>

                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">
                        By entering this site, you agree to our Terms of Service.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AgeVerification;
