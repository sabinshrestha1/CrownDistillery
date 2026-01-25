import React from 'react';

const CareersPage = () => {
    return (
        <div className="pt-20 min-h-screen bg-background-dark">
            <section className="py-24 text-center">
                <div className="container mx-auto px-4">
                    <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Careers</span>
                    <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-8">
                        Join Our <span className="text-primary">Team</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg font-serif leading-relaxed mb-12">
                        Become part of a legacy. We are always looking for passionate individuals
                        to help us write the next chapter of Crown Reserve Distillery.
                    </p>

                    <div className="max-w-4xl mx-auto border border-white/10 bg-wood-dark/50 p-12 text-center">
                        <span className="material-symbols-outlined text-primary text-6xl mb-6">work_outline</span>
                        <h2 className="text-white text-2xl font-display mb-4 tracking-widest">Current Openings</h2>
                        <p className="text-gray-500 mb-8 italic">No current openings at the moment. Please check back later or send your resume to our email.</p>
                        <a
                            href="mailto:careers@crownreserve.com"
                            className="inline-block border border-primary text-primary px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all"
                        >
                            Send Your Resume
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
