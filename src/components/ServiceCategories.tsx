
import React from 'react';
import { FileText, Home, Map, Users, AlertTriangle, Calendar, FileCheck, Clipboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Permits & Licenses',
    description: 'Apply for permits, licenses, and official documents',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Housing & Property',
    description: 'Information on housing, property taxes, and zoning',
    icon: Home,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Transportation',
    description: 'Public transit, road conditions, and traffic updates',
    icon: Map,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Community Services',
    description: 'Programs, facilities, and resources for residents',
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Report Issues',
    description: 'Report potholes, graffiti, and other city issues',
    icon: AlertTriangle,
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Events & Programs',
    description: 'City-sponsored events, classes, and initiatives',
    icon: Calendar,
    color: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'Forms & Applications',
    description: 'Access and submit municipal forms and applications',
    icon: FileCheck,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'City Records',
    description: 'Access public records, meeting minutes, and documents',
    icon: Clipboard,
    color: 'bg-amber-100 text-amber-600',
  },
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-civic-lightGray">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-civic-navy mb-4">City Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access information and assistance across a range of municipal services through our AI assistant.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border border-gray-200 hover:border-civic-lightBlue hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`p-3 rounded-full ${service.color} mb-4`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-civic-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
