
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-civic-accent">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-civic-navy">CivicAI</span>
          <span className="ml-1 text-civic-lightBlue">Buddy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link to="/" className="text-sm font-medium text-civic-navy hover:text-civic-lightBlue transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium text-civic-navy hover:text-civic-lightBlue transition-colors">
            Services
          </Link>
          <Link to="/faq" className="text-sm font-medium text-civic-navy hover:text-civic-lightBlue transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-sm font-medium text-civic-navy hover:text-civic-lightBlue transition-colors">
            Contact
          </Link>
          <Button variant="default" className="bg-civic-navy hover:bg-civic-lightBlue text-white">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium text-civic-navy hover:text-civic-lightBlue transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-sm font-medium text-civic-navy hover:text-civic-lightBlue transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/faq" 
                className="text-sm font-medium text-civic-navy hover:text-civic-lightBlue transition-colors"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium text-civic-navy hover:text-civic-lightBlue transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button 
                variant="default" 
                className="bg-civic-navy hover:bg-civic-lightBlue text-white w-full"
                onClick={toggleMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
