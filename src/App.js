import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import BusinessValuation from './pages/services/BusinessValuation';
import StrategicGrowth from './pages/services/StrategicGrowth';
import LitigationSupport from './pages/services/LitigationSupport';
import TaxCompliance from './pages/services/TaxCompliance';
import OtherServices from './pages/services/OtherServices';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/business-valuation" element={<BusinessValuation />} />
            <Route path="/services/strategic-growth" element={<StrategicGrowth />} />
            <Route path="/services/litigation-support" element={<LitigationSupport />} />
            <Route path="/services/tax-compliance" element={<TaxCompliance />} />
            <Route path="/services/other" element={<OtherServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
