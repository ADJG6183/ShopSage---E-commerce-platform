
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "AI-Powered Fashion",
      subtitle: "Discover your perfect style",
      image: "👔",
      gradient: "from-purple-600 to-pink-600",
      cta: "Shop Fashion"
    },
    {
      id: 2,
      title: "Smart Technology",
      subtitle: "Latest gadgets curated for you",
      image: "📱",
      gradient: "from-blue-600 to-cyan-600",
      cta: "Explore Tech"
    },
    {
      id: 3,
      title: "Comfort Footwear",
      subtitle: "Walk in style and comfort",
      image: "👟",
      gradient: "from-green-600 to-emerald-600",
      cta: "Find Shoes"
    },
    {
      id: 4,
      title: "Budget Finds",
      subtitle: "Quality products at great prices",
      image: "💎",
      gradient: "from-orange-600 to-red-600",
      cta: "Save More"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 overflow-hidden rounded-3xl bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center relative overflow-hidden`}>
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
              <div className="text-8xl mb-6 animate-bounce">{slide.image}</div>
              <h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-tight">{slide.title}</h2>
              <p className="text-xl md:text-2xl font-light mb-8 text-white/90">{slide.subtitle}</p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-3"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-3"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlideshow;
