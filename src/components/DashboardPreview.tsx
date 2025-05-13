
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const DashboardPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-white mb-4">Dashboard Demo</h2>
          <p className="text-lg text-gray-300">
            Experience our powerful analytics platform that brings ESG metrics and carbon data together in one intuitive interface.
          </p>
        </div>

        <div className="bg-gray-800 p-4 md:p-8 rounded-xl shadow-2xl mb-12 overflow-hidden">
          {/* Dashboard Mockup */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            {/* Dashboard Header */}
            <div className="absolute top-0 w-full bg-gray-700 flex items-center justify-between px-4 py-3 border-b border-gray-600">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-300 ml-2">CarbonCorp Dashboard</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="absolute top-10 bottom-0 left-0 right-0 p-4 grid grid-cols-12 gap-3">
              {/* Sidebar */}
              <div className="col-span-2 bg-gray-900 rounded-lg p-2">
                <div className="flex flex-col gap-3">
                  <div className="h-8 bg-brand-cyan rounded-md"></div>
                  <div className="h-8 bg-gray-700 rounded-md"></div>
                  <div className="h-8 bg-gray-700 rounded-md"></div>
                  <div className="h-8 bg-gray-700 rounded-md"></div>
                  <div className="h-8 bg-gray-700 rounded-md"></div>
                  <div className="flex-grow"></div>
                  <div className="h-8 bg-gray-700 rounded-md"></div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-10 grid grid-cols-12 gap-3">
                {/* Top Row */}
                <div className="col-span-3 bg-gray-800 rounded-lg border border-gray-700 shadow flex flex-col">
                  <div className="p-2">
                    <div className="h-2 w-16 bg-gray-600 rounded mb-2"></div>
                    <div className="flex justify-between items-end">
                      <div className="h-6 w-20 bg-brand-cyan rounded"></div>
                      <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 bg-gray-800 rounded-lg border border-gray-700 shadow flex flex-col">
                  <div className="p-2">
                    <div className="h-2 w-16 bg-gray-600 rounded mb-2"></div>
                    <div className="flex justify-between items-end">
                      <div className="h-6 w-20 bg-brand-green rounded"></div>
                      <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 bg-gray-800 rounded-lg border border-gray-700 shadow flex flex-col">
                  <div className="p-2">
                    <div className="h-2 w-16 bg-gray-600 rounded mb-2"></div>
                    <div className="flex justify-between items-end">
                      <div className="h-6 w-20 bg-yellow-500 rounded"></div>
                      <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 bg-gray-800 rounded-lg border border-gray-700 shadow flex flex-col">
                  <div className="p-2">
                    <div className="h-2 w-16 bg-gray-600 rounded mb-2"></div>
                    <div className="flex justify-between items-end">
                      <div className="h-6 w-20 bg-purple-500 rounded"></div>
                      <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Middle Row - Chart */}
                <div className="col-span-8 bg-gray-800 rounded-lg border border-gray-700 shadow-md p-2">
                  <div className="h-3 w-24 bg-gray-600 rounded mb-2"></div>
                  <div className="h-[calc(100%-24px)] w-full flex items-end space-x-2">
                    <div className="h-[30%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[45%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[65%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[55%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[70%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[85%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[75%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[95%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[60%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                    <div className="h-[80%] w-8 bg-brand-cyan bg-opacity-50 rounded-t"></div>
                  </div>
                </div>

                {/* Middle Row - Side Panel */}
                <div className="col-span-4 bg-gray-800 rounded-lg border border-gray-700 shadow-md p-2">
                  <div className="h-3 w-24 bg-gray-600 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-700 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="col-span-12 bg-gray-800 rounded-lg border border-gray-700 shadow-md p-2">
                  <div className="h-3 w-24 bg-gray-600 rounded mb-2"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 bg-gray-700 rounded p-2 flex items-center">
                      <div className="h-6 w-6 bg-brand-green rounded-full mr-2"></div>
                      <div className="h-3 w-16 bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-10 bg-gray-700 rounded p-2 flex items-center">
                      <div className="h-6 w-6 bg-brand-cyan rounded-full mr-2"></div>
                      <div className="h-3 w-16 bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-10 bg-gray-700 rounded p-2 flex items-center">
                      <div className="h-6 w-6 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="h-3 w-16 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="btn-primary text-lg"
              onClick={() => navigate('/dashboard')}
            >
              View Live Demo
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black text-lg"
              onClick={() => navigate('/dashboard')}
            >
              Login to Sandbox
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
