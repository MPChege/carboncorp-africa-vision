
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Bridging Africa's $3T Sustainable Finance Gap</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              CarbonCorp was founded with a mission to democratize access to carbon markets and ESG tools for African businesses, creating a more equitable global climate economy.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team of engineers, environmental scientists, and finance experts are building the infrastructure for Africa's sustainable future, with a focus on transparency, accessibility, and climate justice.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-cyan">2020</span>
                <span className="text-gray-600 dark:text-gray-300">Founded</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-green">14</span>
                <span className="text-gray-600 dark:text-gray-300">Countries</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-cyan">$12M+</span>
                <span className="text-gray-600 dark:text-gray-300">Carbon Credits Processed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-green">40+</span>
                <span className="text-gray-600 dark:text-gray-300">Team Members</span>
              </div>
            </div>

            <Button
              className="btn-secondary"
              onClick={() => navigate('/about')}
            >
              Meet Our Team
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full bg-gradient-to-br from-brand-cyan to-brand-green opacity-70"></div>
              </div>
              <div className="h-40 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full bg-gradient-to-tr from-brand-green to-brand-cyan opacity-70"></div>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="h-40 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full bg-gradient-to-bl from-brand-cyan to-brand-green opacity-70"></div>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full bg-gradient-to-tl from-brand-green to-brand-cyan opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Our Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-semibold">NEMA</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-semibold">KEFRI</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-semibold">eBee</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-semibold">ROAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
