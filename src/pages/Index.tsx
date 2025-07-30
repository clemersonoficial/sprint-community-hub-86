
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Star, Target, Hash, TrendingUp, Zap, Shield, Smartphone, User, Briefcase, ClipboardList, MapPin, Calendar, Clock, Clipboard } from "lucide-react";
import jeffersonLopesImg from "@/assets/jefferson-lopes.jpg";
import guimelAndradeImg from "@/assets/guimel-andrade.jpg";
import clemersonLopesImg from "@/assets/clemerson-lopes.jpg";
import jorgeHenriqueImg from "@/assets/jorge-henrique.jpg";

const Index = () => {
  const featuredRaces = [
    {
      id: 1,
      name: "Maratona de São Paulo 2024",
      date: "2024-04-15",
      time: "06:00",
      location: "Parque do Ibirapuera, São Paulo - SP",
      distance: "42K",
      price: "R$ 120,00",
      participants: 5000,
      maxParticipants: 8000,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=200&fit=crop",
      organizer: "RunSP Eventos",
      difficulty: "Avançado",
      categories: ["Maratona", "Meia Maratona"]
    },
    {
      id: 2,
      name: "Night Run São Paulo",
      date: "2024-03-22",
      time: "19:00",
      location: "Marginal Pinheiros, São Paulo - SP",
      distance: "10K",
      price: "R$ 65,00",
      participants: 1200,
      maxParticipants: 2000,
      image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=200&fit=crop",
      organizer: "RunSP Eventos",
      difficulty: "Intermediário",
      categories: ["10K", "5K"]
    },
    {
      id: 3,
      name: "Trail da Tijuca",
      date: "2024-03-30",
      time: "07:00",
      location: "Parque Nacional da Tijuca, Rio de Janeiro - RJ",
      distance: "15K",
      price: "R$ 85,00",
      participants: 650,
      maxParticipants: 800,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop",
      organizer: "Atletis Brasil",
      difficulty: "Avançado",
      categories: ["Trail", "Ultra Trail"]
    },
    {
      id: 4,
      name: "Corrida da Pampulha",
      date: "2024-04-01",
      time: "06:30",
      location: "Lagoa da Pampulha, Belo Horizonte - MG",
      distance: "5K",
      price: "R$ 45,00",
      participants: 800,
      maxParticipants: 1000,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      organizer: "Corredores Unidos",
      difficulty: "Iniciante",
      categories: ["5K", "Corrida Familiar"]
    },
    {
      id: 5,
      name: "Ultra Trail RJ",
      date: "2024-04-20",
      time: "05:00",
      location: "Pedra da Gávea, Rio de Janeiro - RJ",
      distance: "50K",
      price: "R$ 180,00",
      participants: 120,
      maxParticipants: 200,
      image: "https://images.unsplash.com/photo-1542662565-7e4b11186672?w=400&h=200&fit=crop",
      organizer: "Atletis Brasil",
      difficulty: "Extremo",
      categories: ["Ultra Trail", "Trail"]
    },
    {
      id: 6,
      name: "5K Solidário",
      date: "2024-03-25",
      time: "08:00",
      location: "Parque das Mangabeiras, Belo Horizonte - MG",
      distance: "5K",
      price: "R$ 35,00",
      participants: 900,
      maxParticipants: 1200,
      image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=200&fit=crop",
      organizer: "Corredores Unidos",
      difficulty: "Iniciante",
      categories: ["5K", "Inclusiva"]
    }
  ];

  const teamMembers = [
    {
      name: "JEFFERSON LOPES",
      role: "ESPECIALISTA EM MARKETING DIGITAL",
      image: jeffersonLopesImg
    },
    {
      name: "GUIMEL ANDRADE",
      role: "ESPECIALISTA EM GESTÃO DE EVENTOS",
      image: guimelAndradeImg
    },
    {
      name: "CLEMERSON LOPES",
      role: "ESPECIALISTA EM DESIGN ORGANIZACIONAL",
      image: clemersonLopesImg
    },
    {
      name: "JORGE HENRIQUE",
      role: "DESENVOLVEDOR FULLSTACK",
      image: jorgeHenriqueImg
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      
      {/* Featured Races Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Corridas</span>
              <span className="text-foreground"> em Destaque</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Encontre sua próxima corrida, inscreva-se de forma prática e monte seu calendário de competições
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredRaces.map((race) => (
              <Card key={race.id} className="card-glow hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={race.image} 
                    alt={race.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {race.distance}
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {race.difficulty}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{race.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(race.date).toLocaleDateString('pt-BR')} às {race.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {race.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    {race.participants}/{race.maxParticipants} inscritos
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{race.price}</span>
                    <Button 
                      className="btn-primary"
                      onClick={() => window.location.href = `/evento/${race.id}`}
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Por: {race.organizer}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Stats */}
          <Card className="card-glow max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Estatísticas da Plataforma
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <Trophy className="w-12 h-12 text-primary mx-auto" />
                  <div className="text-3xl font-bold gradient-text">1.247+</div>
                  <div className="text-muted-foreground">Eventos Realizados</div>
                </div>
                <div className="space-y-2">
                  <Users className="w-12 h-12 text-primary mx-auto" />
                  <div className="text-3xl font-bold gradient-text">45.892+</div>
                  <div className="text-muted-foreground">Atletas Ativos</div>
                </div>
                <div className="space-y-2">
                  <Star className="w-12 h-12 text-primary mx-auto" />
                  <div className="text-3xl font-bold gradient-text">4.8</div>
                  <div className="text-muted-foreground">Avaliação Média</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Para Quem É A Plataforma Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)]" />
        </div>
        
        {/* Background Image with Chapada dos Veadeiros */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(https://gooutside.com.br/wp-content/uploads/sites/3/2022/09/Chapada-dos-Veadeiros-1.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="text-foreground">PARA QUEM </span>
              <span className="text-primary">É A PLATAFORMA</span>
              <span className="text-foreground"> BORA CORRER?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-glow bg-background/10 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  🧍‍♂️ ATLETAS
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">QUE BUSCAM</h3>
                <p className="text-2xl font-black text-primary">OTIMIZAR SEUS RESULTADOS</p>
              </CardContent>
            </Card>

            <Card className="card-glow bg-background/10 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clipboard className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  🧑‍💼 ORGANIZADORES
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">QUE BUSCAM</h3>
                <p className="text-2xl font-black text-primary">PROFISSIONALIZAR SEUS EVENTOS</p>
              </CardContent>
            </Card>

            <Card className="card-glow bg-background/10 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <ClipboardList className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  📋 ASSESSORIAS ESPORTIVAS
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">QUE BUSCAM</h3>
                <p className="text-2xl font-black text-primary">OTIMIZAÇÃO DE GESTÃO</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-primary fill-current" />
              ))}
            </div>
            <h3 className="text-3xl lg:text-5xl font-black text-primary mb-8">
              QUAIS AS VANTAGENS EM SER NOSSO PARCEIRO?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="card-glow bg-background/10 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-primary mr-3" />
                    <h4 className="font-bold text-foreground">GESTÃO PROFISSIONAL</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Gestão profissional do seu evento com área de inscrição, check-in de retirada de kit's, área financeira, venda à vista ou parcelado, controle de virada de lote, controle de CPF único e emissão de certificado ao final do evento.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow bg-background/10 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Smartphone className="w-8 h-8 text-primary mr-3" />
                    <h4 className="font-bold text-foreground">INTEGRAÇÃO TOTAL</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Integração total com os principais aparelhos e dispositivos do mercado, como: Garmin, Apple Watch, etc. Conexão direta com o Strava.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="card-glow bg-background/10 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-primary mr-3" />
                    <h4 className="font-bold text-foreground">CONTROLE DE MÉTRICAS</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Controle de métricas, perfil personalizável, análise detalhada de cada corrida, além de um quadro geral de como você está progredindo. Estradas e trilhas populares ou trace seus próprios trajetos. Compartilhe seus resultados em suas redes sociais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="text-primary">CONHEÇA A EQUIPE</span>
              <br />
              <span className="text-foreground">QUE FAZ TUDO ISSO</span>
              <br />
              <span className="text-primary">ACONTECER!</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-glow text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;
