
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart } from "lucide-react";
import { useState } from "react";

const ProductShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "AirPods Pro",
      price: "$249",
      image: "🎧",
      description: "Active Noise Cancellation for immersive sound",
      category: "Audio",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "$999",
      image: "📱",
      description: "Titanium. So strong. So light. So Pro.",
      category: "iPhone",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      id: 3,
      name: "MacBook Air",
      price: "$1,099",
      image: "💻",
      description: "Supercharged by M2 chip",
      category: "Mac",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      price: "$399",
      image: "⌚",
      description: "Your essential companion",
      category: "Watch",
      gradient: "from-red-500 to-pink-600"
    },
    {
      id: 5,
      name: "iPad Air",
      price: "$599",
      image: "📱",
      description: "Serious performance. Seriously thin.",
      category: "iPad",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      id: 6,
      name: "Studio Display",
      price: "$1,599",
      image: "🖥️",
      description: "A sight to behold",
      category: "Display",
      gradient: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-thin text-gray-900 mb-4 tracking-tight">
            Recommended for you
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Curated selections based on your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group cursor-pointer border-0 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform ${
                hoveredProduct === product.id ? 'scale-105 -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
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
                  <p className="text-gray-600 mb-4 font-light leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-medium text-gray-900">{product.price}</span>
                    <Button 
                      variant="ghost" 
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full px-4 py-2 transition-all duration-300"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-thin mb-4">Experience the difference</h3>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              Our AI learns your preferences to recommend products you'll love. Every suggestion is personalized just for you.
            </p>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
              Explore All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
