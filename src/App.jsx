import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SpiritsPage from './pages/SpiritsPage';
import AboutUs from './pages/AboutUs';
import OurStory from './pages/OurStory';
import CareersPage from './pages/CareersPage';
import AgeVerification from './components/ui/AgeVerification';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const [verified, setVerified] = useState(() => {
    return sessionStorage.getItem('ageVerified') === 'true';
  });

  const handleVerify = () => {
    sessionStorage.setItem('ageVerified', 'true');
    setVerified(true);
  };

  if (!verified) {
    return <AgeVerification onVerify={handleVerify} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spirits" element={<SpiritsPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
