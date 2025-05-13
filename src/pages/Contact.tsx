
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      
      <div className="pt-16 pb-32 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to explore partnership opportunities or learn more about our platform.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Contact;
