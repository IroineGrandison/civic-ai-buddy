
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-civic-navy text-white pt-12 pb-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">CivicAI</span>
              <span className="ml-1 text-civic-lightBlue">Buddy</span>
            </Link>
            <p className="mt-4 text-sm text-gray-200">
              Your digital assistant for civic services and information.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#permits" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Permits &amp; Licenses
                </Link>
              </li>
              <li>
                <Link to="/services#public-works" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Public Works
                </Link>
              </li>
              <li>
                <Link to="/services#city-services" className="text-sm text-gray-200 hover:text-white transition-colors">
                  City Services
                </Link>
              </li>
              <li>
                <Link to="/services#community" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Community Programs
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-200 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-sm text-gray-200">
              Contact: support@civicaibuddy.gov
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} CivicAI Buddy. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-xs text-gray-300 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
