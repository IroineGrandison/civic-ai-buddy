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
    content: "Hello! I'm your advanced CivicAI Assistant. I can help you with a wide range of city services and information. Ask me anything about city operations, services, permits, events, and more!"
  }
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [perplexityApiKey, setPerplexityApiKey] = useState('');
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
      // Check if Perplexity API key is set
      if (!perplexityApiKey) {
        toast({
          title: "API Key Required",
          description: "Please enter your Perplexity API key to use the AI assistant.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${perplexityApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant for city services. Provide concise, accurate information about municipal services, events, and city operations. If you do not know the answer, say so politely.'
            },
            {
              role: 'user',
              content: input
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 1000
        }),
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0].message) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content
        };
        
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error('No response from AI');
      }
      
      setIsLoading(false);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please check your API key or try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (perplexityApiKey) {
      toast({
        title: "API Key Set",
        description: "Perplexity API key has been configured. You can now use the AI assistant.",
        variant: "default",
      });
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
            {/* Add API Key Input if not set */}
            {!perplexityApiKey && (
              <form onSubmit={handleApiKeySubmit} className="p-4">
                <div className="mb-4">
                  <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                    Perplexity API Key
                  </label>
                  <Input
                    id="apiKey"
                    type="password"
                    value={perplexityApiKey}
                    onChange={(e) => setPerplexityApiKey(e.target.value)}
                    placeholder="Enter your Perplexity API key"
                    required
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="bg-civic-navy hover:bg-civic-lightBlue">
                  Set API Key
                </Button>
              </form>
            )}

            {/* Existing chat interface code */}
            {perplexityApiKey && (
              <>
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
              </>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-6 text-center text-sm text-gray-500 max-w-2xl mx-auto">
          <p>
            This AI assistant uses advanced language models to provide comprehensive city service information.
            Note: Requires a Perplexity API key for full functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
