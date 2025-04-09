
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-civic-navy text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Experience the future of civic engagement with our AI-powered assistant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-civic-lightBlue hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              size="lg"
            >
              Try CivicAI Now
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-civic-navy px-6 py-3 rounded-lg"
              size="lg"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
