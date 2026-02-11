import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SpiritsPage from './pages/SpiritsPage';
import AboutUs from './pages/AboutUs';
import OurStory from './pages/OurStory';
import CareersPage from './pages/CareersPage';
import AgeGateModal from './components/ui/AgeGateModal';
import ScrollToTop from './components/ui/ScrollToTop';
import NotAllowed from './pages/NotAllowed';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <AgeGateModal />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spirits" element={<SpiritsPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/not-allowed" element={<NotAllowed />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
