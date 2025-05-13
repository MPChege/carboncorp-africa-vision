
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      
      <div className="pt-16 pb-32 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6">About CarbonCorp</h1>
            <p className="text-xl text-gray-300 mb-8">
              Bridging Africa's $3T Sustainable Finance Gap through technology and innovation.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>Coming Soon</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              We're currently building this page. Please check back soon to learn more about our mission, team, and partners.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
