
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    quote: "The CivicAI Buddy helped me navigate the permit application process in minutes, saving me hours of frustration and multiple trips to City Hall.",
    author: "Maria Rodriguez",
    title: "Homeowner",
  },
  {
    quote: "I needed to report a streetlight outage at 11pm and got an immediate response with a tracking number. The issue was fixed the next day!",
    author: "James Wilson",
    title: "Concerned Citizen",
  },
  {
    quote: "As a new resident, CivicAI Buddy has been invaluable in helping me learn about community programs and local regulations.",
    author: "Sarah Johnson",
    title: "New Resident",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-civic-accent">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-civic-navy mb-4">What Citizens Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from people using CivicAI to navigate city services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow">
              <CardContent className="p-6">
                <QuoteIcon className="h-8 w-8 text-civic-lightBlue opacity-50 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-civic-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
