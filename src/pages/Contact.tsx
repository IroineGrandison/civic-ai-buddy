
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you shortly.",
      });
      setName('');
      setEmail('');
      setTopic('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-civic-navy text-white py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Have questions or need assistance? Reach out to our team.
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-civic-navy mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                        Topic
                      </label>
                      <Input
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="What is this regarding?"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        required
                        className="w-full h-32"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-civic-navy hover:bg-civic-lightBlue text-white w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-civic-navy mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-civic-lightBlue mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium text-civic-navy">Email</h3>
                          <p className="text-gray-600">support@civicaibuddy.gov</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-civic-lightBlue mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium text-civic-navy">Phone</h3>
                          <p className="text-gray-600">(555) 123-4567</p>
                          <p className="text-sm text-gray-500">Monday to Friday, 8:30 AM to 5:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-civic-lightBlue mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium text-civic-navy">Address</h3>
                          <p className="text-gray-600">
                            123 City Hall Plaza<br />
                            Civic Center<br />
                            Anytown, ST 12345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-civic-lightBlue mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium text-civic-navy">Office Hours</h3>
                          <p className="text-gray-600">
                            Monday to Friday: 8:30 AM - 5:00 PM<br />
                            Saturday: Closed<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
