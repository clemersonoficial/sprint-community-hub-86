
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Trophy, Calendar, Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/", icon: Calendar },
    { name: "EVENTOS", href: "/eventos", icon: Calendar },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  const handleCreateEvent = () => {
    navigate("/organizador/login");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
            <img
              src="/lovable-uploads/ac5297f2-074b-4ca2-acb2-0e7922395322.png"
              alt="Bora Correr Logo"
              className="h-12 w-auto"
            />
            <img
              src="/lovable-uploads/76b9261e-f21a-48ca-ad98-ea9a42a52e30.png"
              alt="Logomarca"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Button 
                key={item.name} 
                variant="ghost" 
                className={`btn-ghost ${location.pathname === item.href ? 'bg-primary/10' : ''}`}
                onClick={() => handleNavigation(item.href)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-primary" onClick={handleCreateEvent}>
              CRIAR EVENTO
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Button 
                  key={item.name} 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => handleNavigation(item.href)}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.name}
                </Button>
              ))}
              <Button className="btn-primary mt-4" onClick={handleCreateEvent}>
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
