
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import ESG from '@/pages/ESG';
import Carbon from '@/pages/Carbon';
import Dashboard from '@/pages/Dashboard';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

// Export the logo URL for use across components
export const logo = {
  src: "/lovable-uploads/ab17bf72-1fe9-456b-9b9f-788ebc506594.png",
  alt: "CarbonCorp Logo"
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/esg" element={<ESG />} />
        <Route path="/carbon" element={<Carbon />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
