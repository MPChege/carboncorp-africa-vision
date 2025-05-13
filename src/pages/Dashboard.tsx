
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      
      <div className="pt-16 pb-32 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6">Dashboard Demo</h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience our powerful ESG and carbon analytics platform.
            </p>
            <Button className="btn-primary text-lg">Request Full Access</Button>
          </div>
        </div>
      </div>
      
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>Coming Soon</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              We're currently building this interactive dashboard demo. Please check back soon to experience our platform in action.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
