
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Clothes", path: "/clothes" },
    { name: "Shoes", path: "/shoes" },
    { name: "Technology", path: "/technology" },
    { name: "Home Essentials", path: "/home-essentials" },
    { name: "Budget Options", path: "/budget" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-lg' 
        : 'bg-black/80 backdrop-blur-xl border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <Link to="/" className={`font-bold text-white tracking-tight transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}>
            SHOP SAGE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  location.pathname === item.path ? "text-blue-400" : "text-white/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-400 hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-400 hover:bg-white/10">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-blue-400 hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  location.pathname === item.path ? "text-blue-400" : "text-white/80"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
