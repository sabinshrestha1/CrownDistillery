import React from 'react';
import Hero from '../components/home/Hero';
import PremiumShowcase from '../components/home/PremiumShowcase';
import ExperimentalCenters from '../components/home/ExperimentalCenters';

const Home = () => {
    return (
        <>
            <Hero />
            <PremiumShowcase />
            <ExperimentalCenters />
        </>
    );
};

export default Home;
