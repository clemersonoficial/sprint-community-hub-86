
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleAthleteClick = () => {
    navigate("/atleta/login");
  };

  const handleOrganizerClick = () => {
    navigate("/organizador/login");
  };

  return (
    <section className="min-h-screen bg-gradient-dark relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)]" />
      </div>

      {/* New Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(/lovable-uploads/edd04521-6985-4146-bb31-d79a51640882.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 fade-in-up">
              <div className="relative">
                {/* Background image for the text */}
                <div 
                  className="absolute inset-0 opacity-20 rounded-2xl"
                  style={{
                    backgroundImage: `url(/lovable-uploads/ddcfbd32-8c4c-4de3-94c6-efbdac97bac5.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <h1 className="text-5xl lg:text-7xl font-black leading-tight relative z-10 p-8">
                  <span className="gradient-text">A PLATAFORMA</span>
                  <br />
                  <span className="gradient-text">COMPLETA PARA</span>
                  <br />
                  <span className="text-foreground">ORGANIZADORES</span>
                  <br />
                  <span className="text-foreground">E </span>
                  <span className="gradient-text">ATLETAS!</span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-md">
                Gerencie eventos, conecte-se com a comunidade e monitore sua performance em uma única plataforma.
              </p>
            </div>

            <div className="space-y-4 fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg text-primary font-semibold">
                Acesse agora mesmo:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-outline text-lg px-8 py-4" onClick={handleAthleteClick}>
                  <Play className="w-5 h-5 mr-2" />
                  SOU ATLETA
                </Button>
                <Button className="btn-primary text-lg px-8 py-4" onClick={handleOrganizerClick}>
                  <Activity className="w-5 h-5 mr-2" />
                  SOU ORGANIZADOR
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8 fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="card-glow text-center p-4">
                <h3 className="font-bold text-primary text-lg">500+</h3>
                <p className="text-sm text-muted-foreground">Eventos Criados</p>
              </div>
              <div className="card-glow text-center p-4">
                <h3 className="font-bold text-primary text-lg">10k+</h3>
                <p className="text-sm text-muted-foreground">Atletas Ativos</p>
              </div>
            </div>
          </div>

          {/* Right Content - Runner Image Only */}
          <div className="relative fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-glow">
              <img
                src="/lovable-uploads/2d3b2f53-5c0f-4f97-a0d9-6d2c16493b11.png"
                alt="Atleta correndo"
                className="w-full h-auto runner-animation object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 pulse-yellow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
