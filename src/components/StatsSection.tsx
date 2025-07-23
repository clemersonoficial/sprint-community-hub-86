import { useEffect, useState } from "react";
import { Clock, Users, Trophy, MapPin } from "lucide-react";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    events: 0,
    athletes: 0,
    distance: 0,
    cities: 0
  });

  const finalValues = {
    events: 500,
    athletes: 10000,
    distance: 50000,
    cities: 120
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        events: Math.min(prev.events + Math.ceil(finalValues.events / steps), finalValues.events),
        athletes: Math.min(prev.athletes + Math.ceil(finalValues.athletes / steps), finalValues.athletes),
        distance: Math.min(prev.distance + Math.ceil(finalValues.distance / steps), finalValues.distance),
        cities: Math.min(prev.cities + Math.ceil(finalValues.cities / steps), finalValues.cities)
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Trophy,
      value: counters.events,
      label: "Eventos Realizados",
      suffix: "+"
    },
    {
      icon: Users,
      value: counters.athletes,
      label: "Atletas Cadastrados",
      suffix: "+"
    },
    {
      icon: Clock,
      value: counters.distance,
      label: "KM Percorridos",
      suffix: "+"
    },
    {
      icon: MapPin,
      value: counters.cities,
      label: "Cidades Atendidas",
      suffix: "+"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--primary))_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Números que </span>
            <span className="gradient-text">Impressionam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma está crescendo rapidamente e impactando a vida de milhares de corredores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center card-glow p-8 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl lg:text-5xl font-black gradient-text mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <p className="text-lg text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
              <span className="text-primary font-semibold">🏆 Plataforma #1 no Brasil</span>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
              <span className="text-primary font-semibold">⭐ 4.9 Estrelas na App Store</span>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
              <span className="text-primary font-semibold">🚀 Crescimento de 300% ao ano</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;