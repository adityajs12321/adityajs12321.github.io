
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-dreamspace-700">
            <span className="text-gradient">Dream</span>Space
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/features"
            className="text-gray-600 hover:text-dreamspace-600 font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            to="#how-it-works"
            className="text-gray-600 hover:text-dreamspace-600 font-medium transition-colors"
          >
            How It Works
          </Link>
          <Link
            to="#pricing"
            className="text-gray-600 hover:text-dreamspace-600 font-medium transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="#contact"
            className="text-gray-600 hover:text-dreamspace-600 font-medium transition-colors"
          >
            Contact
          </Link>
          <Button className="bg-dreamspace-500 hover:bg-dreamspace-600 text-white">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-4">
            <Link
              to="/features"
              className="block text-gray-600 hover:text-dreamspace-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="block text-gray-600 hover:text-dreamspace-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link
              to="#pricing"
              className="block text-gray-600 hover:text-dreamspace-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="#contact"
              className="block text-gray-600 hover:text-dreamspace-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="w-full bg-dreamspace-500 hover:bg-dreamspace-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
