
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SegmentsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Solutions For All Stakeholders</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Whether you're an SME, investor, or validator, our platform offers tailored solutions to meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="impact-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">For SMEs</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get ESG verified and access green finance opportunities to grow your sustainable business in Africa.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Simplified ESG reporting</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Access to global carbon markets</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Green finance opportunities</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Compliance with regulations</span>
                </li>
              </ul>
            </div>
            <Button
              className="btn-primary w-full"
              onClick={() => navigate('/dashboard')}
            >
              Get ESG Verified
            </Button>
          </div>

          <div className="impact-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">For Investors</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Access verified impact projects and invest in Africa's sustainable future with transparent ROI tracking.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Verified impact projects</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Transparent impact metrics</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Portfolio diversification</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Real-time ROI tracking</span>
                </li>
              </ul>
            </div>
            <Button
              className="btn-secondary w-full"
              onClick={() => navigate('/carbon')}
            >
              Browse Projects
            </Button>
          </div>

          <div className="impact-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">For Validators</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join our network of trusted verifiers and contribute to building Africa's transparent carbon ecosystem.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Validation fee income</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Easy-to-use validation tools</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Access to validator network</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Staking rewards</span>
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              className="border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-black transition-colors w-full"
              onClick={() => navigate('/contact')}
            >
              Become a Validator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
