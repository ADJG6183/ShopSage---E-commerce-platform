
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductRecommendations = () => {
  const [selectedUser, setSelectedUser] = useState("tech-enthusiast");

  const users = {
    "tech-enthusiast": {
      name: "Alex Chen",
      avatar: "👨‍💻",
      interests: ["Electronics", "Gaming", "Programming"]
    },
    "fashion-lover": {
      name: "Sarah Johnson",
      avatar: "👩‍🎨",
      interests: ["Fashion", "Accessories", "Beauty"]
    },
    "fitness-fan": {
      name: "Mike Rodriguez",
      avatar: "🏋️‍♂️",
      interests: ["Fitness", "Sports", "Health"]
    }
  };

  const recommendations = {
    "tech-enthusiast": [
      {
        id: 1,
        name: "Gaming Mechanical Keyboard",
        price: "$149.99",
        rating: 4.8,
        confidence: 94,
        image: "⌨️",
        category: "Electronics"
      },
      {
        id: 2,
        name: "Wireless Noise-Canceling Headphones",
        price: "$299.99",
        rating: 4.9,
        confidence: 91,
        image: "🎧",
        category: "Audio"
      },
      {
        id: 3,
        name: "4K Programming Monitor",
        price: "$449.99",
        rating: 4.7,
        confidence: 88,
        image: "🖥️",
        category: "Displays"
      }
    ],
    "fashion-lover": [
      {
        id: 4,
        name: "Designer Leather Handbag",
        price: "$189.99",
        rating: 4.6,
        confidence: 92,
        image: "👜",
        category: "Accessories"
      },
      {
        id: 5,
        name: "Silk Scarf Collection",
        price: "$79.99",
        rating: 4.8,
        confidence: 89,
        image: "🧣",
        category: "Fashion"
      },
      {
        id: 6,
        name: "Premium Skincare Set",
        price: "$129.99",
        rating: 4.9,
        confidence: 86,
        image: "💄",
        category: "Beauty"
      }
    ],
    "fitness-fan": [
      {
        id: 7,
        name: "Smart Fitness Tracker",
        price: "$199.99",
        rating: 4.7,
        confidence: 95,
        image: "⌚",
        category: "Wearables"
      },
      {
        id: 8,
        name: "Protein Powder Bundle",
        price: "$89.99",
        rating: 4.6,
        confidence: 90,
        image: "🥤",
        category: "Supplements"
      },
      {
        id: 9,
        name: "Resistance Band Set",
        price: "$34.99",
        rating: 4.8,
        confidence: 87,
        image: "🏃‍♂️",
        category: "Equipment"
      }
    ]
  };

  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Live Recommendation Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how our AI analyzes user behavior to deliver personalized product recommendations 
            with confidence scores and real-time adaptation.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Select a User Profile</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(users).map(([key, user]) => (
              <Button
                key={key}
                variant={selectedUser === key ? "default" : "outline"}
                onClick={() => setSelectedUser(key)}
                className="p-6 h-auto flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <span className="text-3xl">{user.avatar}</span>
                <span className="font-semibold">{user.name}</span>
                <div className="flex gap-1 flex-wrap">
                  {user.interests.map((interest, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Recommendations for {users[selectedUser].name}
            </h4>
            <p className="text-gray-600">
              Based on browsing history, purchase behavior, and similar user patterns
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations[selectedUser].map((product, index) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-6xl">{product.image}</div>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      product.confidence >= 90 
                        ? 'bg-green-100 text-green-800' 
                        : product.confidence >= 85 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {product.confidence}% match
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {product.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <Button size="sm" variant="outline" className="hover:bg-red-50">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Data Collection</h5>
                  <p className="text-sm text-gray-600">Track user browsing patterns, purchase history, and interaction data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">AI Analysis</h5>
                  <p className="text-sm text-gray-600">TensorFlow models process data to identify patterns and preferences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Personalization</h5>
                  <p className="text-sm text-gray-600">Deliver tailored recommendations with confidence scores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;
