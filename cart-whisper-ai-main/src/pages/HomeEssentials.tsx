
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ChevronRight } from "lucide-react";
import { useState } from "react";

const HomeEssentials = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    { id: 1, name: "Smart Coffee Maker", price: "$159", image: "☕", category: "Kitchen", gradient: "from-amber-500 to-orange-600" },
    { id: 2, name: "Cozy Throw Blanket", price: "$49", image: "🛋️", category: "Living Room", gradient: "from-purple-400 to-pink-500" },
    { id: 3, name: "LED Desk Lamp", price: "$89", image: "💡", category: "Office", gradient: "from-yellow-400 to-orange-500" },
    { id: 4, name: "Air Purifier", price: "$199", image: "🌿", category: "Health", gradient: "from-green-400 to-emerald-500" },
    { id: 5, name: "Storage Organizer", price: "$39", image: "📦", category: "Organization", gradient: "from-blue-400 to-cyan-500" },
    { id: 6, name: "Aromatherapy Diffuser", price: "$69", image: "🕯️", category: "Wellness", gradient: "from-indigo-400 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-thin text-gray-900 mb-4 tracking-tight">Home Essentials</h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Transform your living space with carefully curated home essentials and smart solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className={`group cursor-pointer border-0 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform ${
                  hoveredProduct === product.id ? 'scale-105 -translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className={`h-64 bg-gradient-to-br ${product.gradient} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                      {product.image}
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 rounded-full p-2">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2 font-medium">{product.category}</div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">{product.name}</h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-medium text-gray-900">{product.price}</span>
                      <Button 
                        variant="ghost" 
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full px-4 py-2 transition-all duration-300"
                      >
                        Add to Cart
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEssentials;
