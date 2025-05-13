
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  AlignJustify, 
  AlignCenter, 
  AlignLeft 
} from 'lucide-react';

const ESGSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">ESG Impact Hub</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our AI-powered ESG solutions help African SMEs track, report, and improve their environmental, social, and governance performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="impact-card flex flex-col items-center text-center">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6">
              <AlignLeft size={48} className="text-brand-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-4">Assess</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              AI-powered baseline assessments that determine your current environmental impact and ESG performance.
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Data-driven insights</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Carbon footprint calculation</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Gap analysis reports</span>
              </li>
            </ul>
          </div>

          <div className="impact-card flex flex-col items-center text-center">
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-full mb-6">
              <AlignCenter size={48} className="text-brand-green" />
            </div>
            <h3 className="text-xl font-bold mb-4">Align</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Streamlined compliance with international and local standards including ISSB, CSRD, and NEMA regulations.
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Regulatory compliance</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Standardized reporting</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>International frameworks</span>
              </li>
            </ul>
          </div>

          <div className="impact-card flex flex-col items-center text-center">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-full mb-6">
              <AlignJustify size={48} className="text-brand-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-4">Act</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Real-time tracking and reporting tools to monitor progress and demonstrate continuous improvement.
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Live monitoring dashboards</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Automated reporting</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Impact verification</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="btn-secondary text-lg"
            onClick={() => navigate('/esg')}
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ESGSection;
