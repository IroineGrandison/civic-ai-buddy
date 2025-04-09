
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: "Hello! I'm your CivicAI Assistant. How can I help you with city services today?"
  }
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: input
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Simulate AI response (in a real app, this would be an API call)
      setTimeout(() => {
        const responses: {[key: string]: string} = {
          "permit": "To apply for a permit, you'll need to visit the City Hall Permit Office or use our online portal. Application requirements vary by permit type. Would you like information about a specific permit?",
          "recycling": "Recycling collection occurs every Tuesday. Please ensure recyclables are properly sorted and placed in the blue bin before 7 AM on collection day.",
          "tax": "Property tax payments are due quarterly. You can pay online, by mail, or in person at City Hall. The next due date is July 15th.",
          "park": "Our city has 12 public parks with facilities including playgrounds, walking trails, and picnic areas. Would you like information about a specific park?",
          "report": "You can report city issues like potholes, graffiti, or broken streetlights through our 311 service online or by phone.",
          "hours": "City Hall is open Monday through Friday from 8:30 AM to 4:30 PM, excluding holidays.",
          "election": "The next local election is scheduled for November 5th. Voter registration deadline is October 15th.",
          "water": "For water service inquiries or to report issues, please contact the Water Department at (555) 123-4567.",
          "library": "Our public libraries are open Monday through Saturday from 9:00 AM to 8:00 PM and Sunday from 12:00 PM to 5:00 PM.",
          "bus": "Public transportation schedules can be found on the Transit Authority website or through their mobile app.",
        };

        // Generate a response based on keywords in the user's message
        let aiResponse = "I'm not sure how to help with that specific request. Could you provide more details or ask about city services like permits, recycling, taxes, parks, or reporting issues?";
        
        const lowercaseInput = input.toLowerCase();
        for (const [keyword, response] of Object.entries(responses)) {
          if (lowercaseInput.includes(keyword)) {
            aiResponse = response;
            break;
          }
        }

        const assistantMessage: Message = {
          role: 'assistant',
          content: aiResponse
        };
        
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-civic-navy mb-4">Ask CivicAI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get quick answers to your questions about city services, permits, events, and more.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto border border-gray-200 shadow-sm">
          <CardContent className="p-0">
            <div className="bg-civic-navy text-white p-4 rounded-t-lg">
              <div className="flex items-center">
                <Bot className="h-6 w-6 mr-2" />
                <h3 className="font-medium">CivicAI Assistant</h3>
              </div>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'assistant'
                        ? 'bg-white border border-gray-200 text-gray-800'
                        : 'bg-civic-navy text-white'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {message.role === 'assistant' ? (
                        <>
                          <Bot className="h-4 w-4 mr-1" />
                          <span className="text-xs font-medium">CivicAI</span>
                        </>
                      ) : (
                        <>
                          <User className="h-4 w-4 mr-1" />
                          <span className="text-xs font-medium">You</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <span className="text-xs font-medium">CivicAI is typing...</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse delay-150"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about city services, permits, events..."
                  disabled={isLoading}
                  className="flex-grow"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || !input.trim()} 
                  className="bg-civic-navy hover:bg-civic-lightBlue"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-6 text-center text-sm text-gray-500 max-w-2xl mx-auto">
          <p>
            This is a demo assistant. In a production environment, it would connect to a 
            comprehensive database of city information and services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
