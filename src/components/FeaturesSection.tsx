import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Users, 
  Shield, 
  Clock, 
  Trophy, 
  MapPin,
  Smartphone,
  TrendingUp,
  UserCheck,
  Heart
} from "lucide-react";

const FeaturesSection = () => {
  const organizerFeatures = [
    {
      icon: CreditCard,
      title: "Pagamentos Seguros",
      description: "Integração com ASAS e Mercado Pago. Saque liberado após o evento.",
      color: "text-green-400"
    },
    {
      icon: UserCheck,
      title: "Retirada de Kit por CPF",
      description: "Sistema automático de validação e controle de entrega de kits.",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Gestão de Grupos",
      description: "Crie grupos, defina líderes e gerencie equipes facilmente.",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Transações Seguras",
      description: "Senha para transações e controle financeiro completo.",
      color: "text-red-400"
    }
  ];

  const athleteFeatures = [
    {
      icon: Heart,
      title: "Conecte com Strava/Garmin",
      description: "Sincronize automaticamente seus treinos e métricas.",
      color: "text-orange-400"
    },
    {
      icon: TrendingUp,
      title: "Análise de Performance",
      description: "Acompanhe seu progresso e evolução nos treinos.",
      color: "text-cyan-400"
    },
    {
      icon: MapPin,
      title: "Comunidades Locais",
      description: "Encontre grupos de corrida na sua região.",
      color: "text-green-400"
    },
    {
      icon: Trophy,
      title: "Conquistas e Rankings",
      description: "Compare seu desempenho e ganhe medalhas virtuais.",
      color: "text-yellow-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Funcionalidades</span>
            <span className="text-foreground"> Completas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para organizar eventos incríveis ou potencializar seus treinos
          </p>
        </div>

        {/* Para Organizadores */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Para <span className="gradient-text">Organizadores</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Ferramentas profissionais para gestão completa de eventos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizerFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="card-glow hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Para Atletas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Para <span className="gradient-text">Atletas</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Maximize sua performance e conecte-se com a comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {athleteFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="card-glow hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-dark rounded-3xl p-12 card-glow">
          <h3 className="text-3xl font-bold mb-6">
            Pronto para <span className="gradient-text">Começar</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de atletas e organizadores que já transformaram 
            sua experiência com corridas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              CRIAR CONTA GRÁTIS
            </Button>
            <Button className="btn-outline text-lg px-8 py-4">
              <Smartphone className="w-5 h-5 mr-2" />
              BAIXAR APP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;