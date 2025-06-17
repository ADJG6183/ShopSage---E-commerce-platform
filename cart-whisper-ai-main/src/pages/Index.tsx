
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ProductSlideshow from "@/components/ProductSlideshow";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Featured Slideshow Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-thin text-gray-900 mb-4 tracking-tight">
                Featured Collections
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Handpicked selections powered by AI
              </p>
            </div>
            <ProductSlideshow />
          </div>
        </section>

        <ProductShowcase />
      </div>
    </div>
  );
};

export default Index;
