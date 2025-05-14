
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  useEffect(() => {
    // Redirect to external analytics page
    window.location.href = 'https://carbon-corp-esg.vercel.app/analytics';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      
      <div className="pt-16 pb-32 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6">Redirecting to Dashboard...</h1>
            <p className="text-xl text-gray-300 mb-8">
              You will be redirected to our analytics dashboard shortly.
            </p>
            <Button 
              className="btn-primary text-lg"
              onClick={() => window.location.href = 'https://carbon-corp-esg.vercel.app/analytics'}
            >
              Go to Dashboard Now
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
