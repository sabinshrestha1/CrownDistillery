import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SpiritsPage from './pages/SpiritsPage';
import AgeVerification from './components/ui/AgeVerification';

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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spirits" element={<SpiritsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
