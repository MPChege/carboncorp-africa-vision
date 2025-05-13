
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ImpactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white mb-4">Our Social Impact</h2>
          <p className="text-lg text-gray-300">
            Driving measurable change across Africa through climate action, job creation, and ecosystem restoration.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center transform transition duration-300 hover:translate-y-[-5px]">
            <div className="text-4xl font-bold mb-2 text-brand-cyan">500k+</div>
            <div className="text-lg text-gray-300">Tonnes CO₂ Offset</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center transform transition duration-300 hover:translate-y-[-5px]">
            <div className="text-4xl font-bold mb-2 text-brand-green">3,200+</div>
            <div className="text-lg text-gray-300">Jobs Created</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center transform transition duration-300 hover:translate-y-[-5px]">
            <div className="text-4xl font-bold mb-2 text-brand-cyan">5,000+</div>
            <div className="text-lg text-gray-300">Hectares Restored</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center transform transition duration-300 hover:translate-y-[-5px]">
            <div className="text-4xl font-bold mb-2 text-brand-green">100+</div>
            <div className="text-lg text-gray-300">SMEs Supported</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Sustainable Development Goals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-blue-500 bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">9</div>
              <div className="text-sm">Industry, Innovation & Infrastructure</div>
            </div>
            <div className="bg-green-500 bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">11</div>
              <div className="text-sm">Sustainable Cities & Communities</div>
            </div>
            <div className="bg-yellow-500 bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-sm">Responsible Consumption & Production</div>
            </div>
            <div className="bg-cyan-500 bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">13</div>
              <div className="text-sm">Climate Action</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="btn-primary text-lg"
            onClick={() => navigate('/about')}
          >
            Learn More About Our Impact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
