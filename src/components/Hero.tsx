
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 to-gray-800 overflow-hidden">
      <div className="hero-pattern absolute inset-0 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-cyan rounded-full filter blur-3xl opacity-10 animate-float z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-green rounded-full filter blur-3xl opacity-10 animate-float z-0" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white mb-6 animate-fade-in">
            Revolutionizing ESG & Carbon Finance in Africa
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Empowering African businesses with AI-driven ESG solutions & transparent carbon markets through blockchain technology.
          </p>
          
          <div className="grid grid-cols-3 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-cyan">
                <span className="animate-counter" style={{ "--num": "3" } as React.CSSProperties}>3</span>T
              </div>
              <p className="text-gray-300">Sustainable Finance Gap</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-cyan">
                <span className="animate-counter" style={{ "--num": "500" } as React.CSSProperties}>500</span>K
              </div>
              <p className="text-gray-300">Tonnes CO₂ Tracked</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-cyan">
                <span className="animate-counter" style={{ "--num": "100" } as React.CSSProperties}>100</span>+
              </div>
              <p className="text-gray-300">African SMEs Onboarded</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              className="btn-primary text-lg"
              onClick={() => navigate('/dashboard')}
            >
              Watch the Demo
            </Button>
            <Button 
              className="btn-secondary text-lg"
              onClick={() => navigate('/esg')}
            >
              Launch Dashboard
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black text-lg"
              onClick={() => navigate('/contact')}
            >
              Join as a Partner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
