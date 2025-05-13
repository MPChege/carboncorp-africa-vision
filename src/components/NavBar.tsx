
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-16 bg-white dark:bg-slate-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-brand-dark dark:text-white">
            Carbon<span className="text-brand-green">Corp</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors">Home</Link>
          <Link to="/esg" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors">ESG Impact Hub</Link>
          <Link to="/carbon" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors">Carbon Platform</Link>
          <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors">Dashboard</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors">About</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors">Contact</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="btn-outline">Login</Button>
          <Button className="btn-primary">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-6 px-6 bg-white dark:bg-slate-900`}>
        <div className="flex flex-col space-y-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors" onClick={toggleMenu}>Home</Link>
          <Link to="/esg" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors" onClick={toggleMenu}>ESG Impact Hub</Link>
          <Link to="/carbon" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors" onClick={toggleMenu}>Carbon Platform</Link>
          <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors" onClick={toggleMenu}>Dashboard</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors" onClick={toggleMenu}>Contact</Link>
          
          <div className="flex flex-col space-y-3 pt-4">
            <Button variant="outline" className="btn-outline w-full">Login</Button>
            <Button className="btn-primary w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
