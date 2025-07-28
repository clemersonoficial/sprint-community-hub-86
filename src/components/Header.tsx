
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
      name: "EVENTOS",
      href: "/eventos",
    },
    {
      name: "INSCRIÇÕES",
      href: "/inscricoes",
    },
    {
      name: "BLOG",
      href: "/blog",
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
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map(item => (
              <Button 
                key={item.name} 
                variant="ghost"
                className={`
                  px-8 py-2 rounded-full text-black font-bold text-base
                  ${location.pathname === item.href 
                    ? 'bg-black text-brand-yellow' 
                    : 'bg-transparent text-black hover:bg-black hover:text-brand-yellow'
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
                px-8 py-2 rounded-full bg-black text-brand-yellow font-bold text-base
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
            className="md:hidden text-black hover:bg-black hover:text-brand-yellow" 
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
                    justify-center px-8 py-2 rounded-full text-black font-bold
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
                  mt-4 px-8 py-2 rounded-full bg-black text-brand-yellow font-bold
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
