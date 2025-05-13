import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '@/App';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'ESG', path: '/esg' },
    { name: 'Carbon', path: '/carbon' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="h-10 w-auto mr-3" 
            />
            <span className="text-xl font-bold text-gray-800 dark:text-white">CarbonCorp</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-brand-cyan'
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-cyan dark:hover:text-brand-cyan'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="bg-brand-green text-white hover:bg-opacity-90"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-brand-cyan dark:hover:text-brand-cyan focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && isMobile && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-2 px-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-brand-cyan'
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-cyan'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="bg-brand-green text-white hover:bg-opacity-90 mt-2"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
