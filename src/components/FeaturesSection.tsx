
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
  Heart,
  DollarSign,
  IdCard,
  BarChart3,
  Medal,
  MapPinIcon,
  RefreshCw
} from "lucide-react";

const FeaturesSection = () => {
  const organizerFeatures = [
    {
      icon: CreditCard,
      title: "Pagamentos e transações com segurança",
      description: "💳 Integração com Asaas e Mercado Pago, senha para transações e controle financeiro completo para sua organização.",
      color: "text-green-400"
    },
    {
      icon: IdCard,
      title: "Retirada de kits facilitada",
      description: "🆔 Retirada simples utilizando apenas o CPF do atleta. Mais agilidade e controle no dia do evento.",
      color: "text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Área financeira descomplicada",
      description: "📈 Venda à vista ou parcelada, controle de virada de lote e emissão automática de certificados ao final da corrida.",
      color: "text-purple-400"
    },
    {
      icon: Smartphone,
      title: "Mais praticidade no seu dia a dia",
      description: "📱 Gerencie toda a sua corrida direto do celular, com agilidade, controle e praticidade.",
      color: "text-red-400"
    }
  ];

  const athleteFeatures = [
    {
      icon: MapPinIcon,
      title: "Descubra as melhores corridas",
      description: "📍 Inscreva-se com facilidade, segurança e garanta sua vaga nos melhores eventos da sua região.",
      color: "text-orange-400"
    },
    {
      icon: Medal,
      title: "Potencialize seus treinos",
      description: "🏅 Acompanhe sua evolução, compare seu desempenho e conquiste medalhas virtuais exclusivas.",
      color: "text-cyan-400"
    },
    {
      icon: Users,
      title: "Comunidades de corrida",
      description: "👟 Conecte-se com grupos de corrida perto de você e compartilhe experiências únicas.",
      color: "text-green-400"
    },
    {
      icon: RefreshCw,
      title: "Sincronize com seus apps favoritos",
      description: "🔄 Integração automática com Strava e Garmin para importar seus treinos e métricas.",
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

        {/* Corridas em Destaque */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="gradient-text">Corridas</span>
              <span className="text-foreground"> em Destaque</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre sua próxima corrida, inscreva-se de forma prática e monte seu calendário de competições.
            </p>
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
