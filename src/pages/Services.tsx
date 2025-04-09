
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCategories from '../components/ServiceCategories';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-civic-navy text-white py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-4">City Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Browse through our comprehensive list of services offered to citizens and residents.
            </p>
          </div>
        </div>
        
        <ServiceCategories />
        
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-civic-navy mb-6">Need Help Finding a Service?</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Our AI assistant can guide you to the right service and help you navigate the process.
              </p>
              <Button 
                className="bg-civic-navy hover:bg-civic-lightBlue text-white"
                size="lg"
                onClick={() => window.location.href = '/#chat'}
              >
                Chat with CivicAI
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
