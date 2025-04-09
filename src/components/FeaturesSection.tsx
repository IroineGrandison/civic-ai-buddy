
import React from 'react';
import { MessageSquare, Clock, FileCheck, ScrollText } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: '24/7 Assistance',
    description: 'Get help with city services and information anytime, day or night, through our AI assistant.',
  },
  {
    icon: Clock,
    title: 'Quick Responses',
    description: 'Save time with instant answers to your civic questions without waiting in line or on hold.',
  },
  {
    icon: FileCheck,
    title: 'Accurate Information',
    description: 'Access up-to-date and reliable information directly from official city sources.',
  },
  {
    icon: ScrollText,
    title: 'Guided Processes',
    description: 'Step-by-step guidance through complex municipal procedures and applications.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-civic-navy mb-4">How CivicAI Helps You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes accessing city services and information easier than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-civic-lightBlue hover:shadow-md transition-all duration-300"
            >
              <div className="bg-civic-accent p-3 rounded-full mb-4 text-civic-navy">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-civic-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
