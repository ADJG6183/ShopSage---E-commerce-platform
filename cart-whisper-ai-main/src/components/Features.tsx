
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, ShoppingBag, BarChart3, Cloud, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "TensorFlow Machine Learning",
      description: "Advanced neural networks analyze user behavior patterns to deliver highly accurate product recommendations.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Personalized Experience",
      description: "Tailored recommendations based on individual browsing history and purchase behavior for each customer.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: ShoppingBag,
      title: "Increased Conversions",
      description: "Boost sales performance with intelligent product suggestions that match customer preferences.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor recommendation performance and customer engagement with comprehensive analytics dashboard.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Cloud,
      title: "AWS Cloud Infrastructure",
      description: "Scalable and reliable deployment on Amazon Web Services ensuring high availability and performance.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Flask API Integration",
      description: "Seamless integration with existing e-commerce platforms through RESTful API endpoints.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-driven recommendation engine combines cutting-edge technology 
            with practical business solutions to transform your e-commerce platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
