
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Heart, ShoppingCart, Settings, Package } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-thin text-gray-900 mb-2">Welcome back, Alex</h1>
                <p className="text-gray-600 font-light">Premium Member since 2024</p>
                <div className="flex items-center mt-3 space-x-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">AI Insights Enabled</span>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">Free Shipping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: ShoppingCart, label: "Orders", value: "24", color: "blue" },
              { icon: Heart, label: "Wishlist", value: "12", color: "red" },
              { icon: Package, label: "Delivered", value: "18", color: "green" },
              { icon: Settings, label: "Reviews", value: "8", color: "purple" }
            ].map((stat, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <div className="text-2xl font-medium text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Recent Orders</h3>
                <div className="space-y-4">
                  {[
                    { item: "iPhone 15 Pro", status: "Delivered", date: "2 days ago" },
                    { item: "Nike Air Max", status: "Shipped", date: "5 days ago" },
                    { item: "MacBook Air", status: "Processing", date: "1 week ago" }
                  ].map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div>
                        <div className="font-medium text-gray-900">{order.item}</div>
                        <div className="text-sm text-gray-600">{order.date}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">AI Recommendations</h3>
                <div className="space-y-4">
                  {[
                    { item: "Wireless Headphones", match: "95%", reason: "Based on your music preferences" },
                    { item: "Smart Watch", match: "88%", reason: "Perfect for your fitness goals" },
                    { item: "Winter Jacket", match: "82%", reason: "Trending in your area" }
                  ].map((rec, index) => (
                    <div key={index} className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-900">{rec.item}</div>
                        <span className="text-sm font-medium text-blue-600">{rec.match} match</span>
                      </div>
                      <div className="text-sm text-gray-600">{rec.reason}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Edit Profile
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full transition-all duration-300">
              Order History
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full transition-all duration-300">
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
