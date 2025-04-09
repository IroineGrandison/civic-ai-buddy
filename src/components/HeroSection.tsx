
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-civic-navy text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-civic-lightBlue transform -skew-x-12"></div>
      </div>
      
      <div className="container relative px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Your Digital Civic Assistant
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Access city services, find information, and get answers to your civic questions - 
              all through an AI-powered assistant designed to serve citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-civic-lightBlue hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                size="lg"
              >
                Chat with CivicAI
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-civic-navy px-6 py-3 rounded-lg"
                size="lg"
              >
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="bg-white/10 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="flex-1"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded p-3">
                    <p className="text-sm">How do I apply for a building permit?</p>
                  </div>
                  <div className="bg-civic-lightBlue/30 rounded p-3">
                    <p className="text-sm">To apply for a building permit, you'll need to visit the city's Building Department website or office. You'll need to submit application forms, building plans, and pay the appropriate fees. Would you like me to walk you through the specific steps or provide you with the relevant links?</p>
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <p className="text-sm">What are the fees for a residential building permit?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
