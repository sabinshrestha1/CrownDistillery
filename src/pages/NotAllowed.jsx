import React from 'react';

const NotAllowed = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8 text-center text-white">
            <div className="max-w-md">
                <h1 className="font-display text-4xl text-primary mb-6 tracking-widest">
                    CROWN RESERVE
                </h1>
                <h2 className="text-2xl font-serif mb-4">Access Denied</h2>
                <p className="text-gray-400 mb-8">
                    You must be of legal drinking age to view this website.
                </p>
                <a
                    href="https://www.google.com"
                    className="text-primary hover:text-white underline tracking-widest text-sm uppercase"
                >
                    Leave Site
                </a>
            </div>
        </div>
    );
};

export default NotAllowed;
