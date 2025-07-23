
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

      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(/lovable-uploads/edd04521-6985-4146-bb31-d79a51640882.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6 fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="gradient-text">A PLATAFORMA</span>
                <br />
                <span className="gradient-text">COMPLETA PARA</span>
                <br />
                <span className="text-foreground">ORGANIZADORES</span>
                <br />
                <span className="text-foreground">E </span>
                <span className="gradient-text">ATLETAS!</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Gerencie eventos, conecte-se com a comunidade e monitore sua performance em uma única plataforma.
              </p>
            </div>

            <div className="space-y-4 fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-base md:text-lg text-primary font-semibold">
                Acesse agora mesmo:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-outline text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto" onClick={handleAthleteClick}>
                  <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  SOU ATLETA
                </Button>
                <Button className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto" onClick={handleOrganizerClick}>
                  <Activity className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  SOU ORGANIZADOR
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 md:pt-8 fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="card-glow text-center p-3 md:p-4">
                <h3 className="font-bold text-primary text-lg md:text-xl">500+</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Eventos Criados</p>
              </div>
              <div className="card-glow text-center p-3 md:p-4">
                <h3 className="font-bold text-primary text-lg md:text-xl">10k+</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Atletas Ativos</p>
              </div>
            </div>
          </div>

          {/* Right Content - Runner Image (sem animação) */}
          <div className="relative fade-in-up mt-8 lg:mt-0" style={{ animationDelay: "0.6s" }}>
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-glow">
              <img
                src="/lovable-uploads/2d3b2f53-5c0f-4f97-a0d9-6d2c16493b11.png"
                alt="Atleta correndo"
                className="w-full h-auto object-cover"
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
