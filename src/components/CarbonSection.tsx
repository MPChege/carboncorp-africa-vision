
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Database, Globe, ChartBar } from 'lucide-react';

const CarbonSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Carbon Platform</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our blockchain-based carbon market brings transparency and accessibility to carbon credits in Africa, powering climate action at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="impact-card flex flex-col items-center text-center">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-full mb-6">
              <Database size={48} className="text-brand-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-4">Green Oracle</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              IoT and Proof-of-Stake verification systems that ensure accurate, real-time carbon measurement across projects.
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>IoT integrated sensors</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Decentralized verification</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Tamper-proof data</span>
              </li>
            </ul>
          </div>

          <div className="impact-card flex flex-col items-center text-center">
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-full mb-6">
              <ChartBar size={48} className="text-brand-green" />
            </div>
            <h3 className="text-xl font-bold mb-4">CC Token System</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Tokenized carbon credits that represent verified carbon reductions with transparent, immutable tracking on blockchain.
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Fungible carbon tokens</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Smart contract execution</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Transparent ownership</span>
              </li>
            </ul>
          </div>

          <div className="impact-card flex flex-col items-center text-center">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6">
              <Globe size={48} className="text-brand-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-4">Carbon Marketplace</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Decentralized exchange where businesses and individuals can buy, sell, and retire carbon credits with minimal friction.
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Low transaction fees</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Project discovery</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Direct impact investment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="btn-primary text-lg"
              onClick={() => navigate('/carbon')}
            >
              Explore Projects
            </Button>
            <Button
              className="btn-secondary text-lg"
              onClick={() => navigate('/dashboard')}
            >
              Offset Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonSection;
