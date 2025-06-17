
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Brain, Cloud, Code, Layers } from "lucide-react";

const TechnicalArchitecture = () => {
  const techStack = [
    {
      category: "Machine Learning",
      icon: Brain,
      technologies: [
        { name: "TensorFlow", description: "Neural network training and inference", color: "bg-orange-500" },
        { name: "Python", description: "Core ML algorithms and data processing", color: "bg-blue-500" },
        { name: "Scikit-learn", description: "Traditional ML algorithms and preprocessing", color: "bg-green-500" }
      ]
    },
    {
      category: "Backend Framework",
      icon: Server,
      technologies: [
        { name: "Flask", description: "RESTful API development and routing", color: "bg-gray-700" },
        { name: "SQLAlchemy", description: "Database ORM and query optimization", color: "bg-red-500" },
        { name: "Redis", description: "Caching and session management", color: "bg-red-600" }
      ]
    },
    {
      category: "Cloud Infrastructure",
      icon: Cloud,
      technologies: [
        { name: "AWS EC2", description: "Scalable compute instances", color: "bg-yellow-600" },
        { name: "AWS RDS", description: "Managed database services", color: "bg-blue-600" },
        { name: "AWS S3", description: "Data storage and model artifacts", color: "bg-green-600" }
      ]
    },
    {
      category: "Data Pipeline",
      icon: Database,
      technologies: [
        { name: "Apache Kafka", description: "Real-time data streaming", color: "bg-purple-600" },
        { name: "PostgreSQL", description: "Primary data storage", color: "bg-blue-700" },
        { name: "Elasticsearch", description: "Search and analytics", color: "bg-yellow-500" }
      ]
    }
  ];

  const metrics = [
    { label: "Response Time", value: "<100ms", description: "Average API response time" },
    { label: "Accuracy", value: "94.2%", description: "Recommendation accuracy rate" },
    { label: "Scalability", value: "10K+", description: "Concurrent users supported" },
    { label: "Uptime", value: "99.9%", description: "System availability" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with enterprise-grade technologies for scalability, reliability, and performance. 
            Our architecture ensures seamless integration with existing e-commerce platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {stack.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-start gap-4 p-4 bg-gray-50/80 rounded-xl hover:bg-gray-100/80 transition-colors duration-200">
                      <div className={`w-3 h-3 rounded-full ${tech.color} mt-2 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Performance Metrics</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Real-world performance data showcasing the efficiency and reliability of our recommendation engine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-xl font-semibold text-blue-100 mb-2">{metric.label}</div>
                <div className="text-sm text-blue-200">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Key Features
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time recommendation updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Collaborative and content-based filtering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">A/B testing and performance monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Multi-channel recommendation delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Fraud detection and quality filtering</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Integration Options
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">API Endpoints</h4>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2 mb-2">GET /recommendations/{`{user_id}`}</Badge>
                  <Badge variant="outline" className="mr-2 mb-2">POST /track/interaction</Badge>
                  <Badge variant="outline" className="mr-2 mb-2">GET /similar/{`{product_id}`}</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Supported Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">Shopify</Badge>
                  <Badge className="bg-green-100 text-green-800">WooCommerce</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Magento</Badge>
                  <Badge className="bg-orange-100 text-orange-800">Custom APIs</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;
