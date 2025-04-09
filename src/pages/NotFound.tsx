
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-civic-lightGray py-16">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center p-4 bg-amber-100 rounded-full mb-6">
            <AlertTriangle className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-civic-navy mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for cannot be found.</p>
          <Button 
            className="bg-civic-navy hover:bg-civic-lightBlue text-white px-6 py-3"
            size="lg"
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
