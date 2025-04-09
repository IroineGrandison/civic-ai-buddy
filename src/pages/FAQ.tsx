
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is CivicAI Buddy?",
    answer: "CivicAI Buddy is an AI-powered digital assistant designed to help citizens access city services, find information, and navigate municipal processes more efficiently."
  },
  {
    question: "How accurate is the information provided by CivicAI?",
    answer: "CivicAI is designed to provide the most up-to-date and accurate information available. It draws from official city databases and resources that are regularly updated. However, for critical matters, we always recommend verifying information through official channels."
  },
  {
    question: "Is my data secure when using CivicAI?",
    answer: "Yes, we take data security very seriously. All interactions are encrypted, and we adhere to strict privacy policies. Personal information is only used to assist with your specific requests and is not stored longer than necessary."
  },
  {
    question: "Can CivicAI process applications and forms for me?",
    answer: "CivicAI can guide you through the process and help you prepare information needed for applications, but official submissions typically need to be done through the city's authorized channels. CivicAI can direct you to the correct submission process."
  },
  {
    question: "What city services can CivicAI help me with?",
    answer: "CivicAI can assist with a wide range of services including permits and licenses, property information, public transportation, community services, reporting issues, finding city events and programs, accessing forms and applications, and locating city records."
  },
  {
    question: "What if CivicAI cannot answer my question?",
    answer: "If CivicAI is unable to provide a satisfactory answer, it will direct you to the appropriate department or resource where you can get more specialized assistance."
  },
  {
    question: "Is there a cost to use CivicAI?",
    answer: "No, CivicAI is a free service provided by the city to improve citizen access to information and services."
  },
  {
    question: "How do I report an issue with CivicAI?",
    answer: "You can report any issues or provide feedback by using the contact form on our website or by emailing support@civicaibuddy.gov."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-civic-navy text-white py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Find answers to common questions about CivicAI Buddy and city services.
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-civic-navy hover:text-civic-lightBlue py-4 font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="py-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
