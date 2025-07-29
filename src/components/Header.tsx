
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "CORRIDAS",
      href: "/eventos",
    },
    {
      name: "BLOG",
      href: "/blog",
    },
    {
      name: "LOGIN",
      href: "/login",
    }
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  const handleCreateEvent = () => {
    navigate("/organizador/login");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-yellow border-b border-brand-yellow-dark">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ddb57b7f-f6ae-4ff0-bb89-69e7e13df9f5.png" 
              alt="Bora Correr" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigation.map(item => (
              <Button 
                key={item.name} 
                variant="ghost"
                className={`
                  px-6 py-2 rounded-full text-black font-bold text-sm border-2 border-black
                  ${location.pathname === item.href 
                    ? 'bg-black text-brand-yellow border-black' 
                    : 'bg-transparent text-black hover:bg-black hover:text-brand-yellow border-black'
                  }
                  transition-all duration-300
                `}
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </Button>
            ))}
            
            {/* Botão CRIAR EVENTO */}
            <Button 
              className="
                px-6 py-2 rounded-full bg-black text-brand-yellow font-bold text-sm border-2 border-black
                hover:bg-gray-800 hover:text-brand-yellow
                transition-all duration-300
              "
              onClick={handleCreateEvent}
            >
              CRIAR EVENTO
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-black hover:bg-black hover:text-brand-yellow border-2 border-black rounded-full" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-brand-yellow-dark pt-4">
            <div className="flex flex-col space-y-2">
              {navigation.map(item => (
                <Button 
                  key={item.name} 
                  variant="ghost" 
                  className="
                    justify-center px-6 py-2 rounded-full text-black font-bold border-2 border-black
                    hover:bg-black hover:text-brand-yellow
                    transition-all duration-300
                  "
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.name}
                </Button>
              ))}
              <Button 
                className="
                  mt-4 px-6 py-2 rounded-full bg-black text-brand-yellow font-bold border-2 border-black
                  hover:bg-gray-800 hover:text-brand-yellow
                  transition-all duration-300
                "
                onClick={handleCreateEvent}
              >
                CRIAR EVENTO
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
