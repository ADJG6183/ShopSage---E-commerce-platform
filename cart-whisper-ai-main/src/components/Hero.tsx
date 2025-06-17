
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black/60"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-thin mb-6 leading-tight tracking-tight">
            Discover
            <br />
            <span className="font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Experience personalized shopping powered by AI. Every recommendation crafted just for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
            Shop Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium rounded-full transition-all duration-300">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
