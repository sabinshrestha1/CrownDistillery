import React from 'react';
import Hero from '../components/home/Hero';
import PremiumShowcase from '../components/home/PremiumShowcase';
import LegacyStory from '../components/home/LegacyStory';
import ExperimentalCenters from '../components/home/ExperimentalCenters';

const Home = () => {
    return (
        <>
            <Hero />
            <PremiumShowcase />
            <LegacyStory />
            <ExperimentalCenters />
        </>
    );
};

export default Home;
