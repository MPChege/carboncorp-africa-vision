
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ESGSection from '@/components/ESGSection';
import CarbonSection from '@/components/CarbonSection';
import DashboardPreview from '@/components/DashboardPreview';
import SegmentsSection from '@/components/SegmentsSection';
import ImpactSection from '@/components/ImpactSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      <Hero />
      <ESGSection />
      <CarbonSection />
      <DashboardPreview />
      <SegmentsSection />
      <ImpactSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
