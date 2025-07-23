import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import OrganizerProfile from "@/components/OrganizerProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Star, Target, Hash, TrendingUp, Zap, Shield, Smartphone } from "lucide-react";

const Index = () => {
  const featuredOrganizers = [
    {
      id: 1,
      name: "RunSP Eventos",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      banner: "/api/placeholder/400/150",
      rating: 5,
      totalEvents: 47,
      totalParticipants: 12847,
      description: "Organizador líder em eventos de corrida em São Paulo. Especializado em maratonas urbanas e corridas temáticas.",
      location: "São Paulo, SP",
      categories: ["Maratona", "Meia Maratona", "10K", "5K"],
      recentEvents: [
        { id: 1, name: "Maratona de São Paulo", date: "2024-03-15", participants: 5000 },
        { id: 2, name: "Night Run SP", date: "2024-02-20", participants: 800 },
        { id: 3, name: "Corrida do Parque", date: "2024-01-28", participants: 1200 }
      ]
    },
    {
      id: 2,
      name: "Atletis Brasil",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", 
      banner: "/api/placeholder/400/150",
      rating: 4,
      totalEvents: 32,
      totalParticipants: 8340,
      description: "Eventos de corrida em todo Brasil. Foco em trail running e corridas de aventura em cenários naturais únicos.",
      location: "Rio de Janeiro, RJ",
      categories: ["Trail", "Ultra Trail", "Corrida Rústica", "10K"],
      recentEvents: [
        { id: 4, name: "Trail da Tijuca", date: "2024-02-25", participants: 400 },
        { id: 5, name: "Ultra Trail RJ", date: "2024-01-15", participants: 150 },
        { id: 6, name: "Corrida Rústica", date: "2024-01-08", participants: 600 }
      ]
    },
    {
      id: 3,
      name: "Corredores Unidos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      banner: "/api/placeholder/400/150", 
      rating: 5,
      totalEvents: 28,
      totalParticipants: 6789,
      description: "Comunidade focada em promover o esporte e a saúde através de corridas inclusivas e acessíveis para todos.",
      location: "Belo Horizonte, MG",
      categories: ["5K", "10K", "Corrida Familiar", "Inclusiva"],
      recentEvents: [
        { id: 7, name: "Corrida da Pampulha", date: "2024-03-01", participants: 950 },
        { id: 8, name: "5K Solidário", date: "2024-02-14", participants: 700 },
        { id: 9, name: "Corrida das Crianças", date: "2024-01-20", participants: 300 }
      ]
    }
  ];

  const teamMembers = [
    {
      name: "JEFFERSON LOPES",
      role: "ESPECIALISTA EM MARKETING DIGITAL",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "GUIMEL ANDRADE",
      role: "ESPECIALISTA EM GESTÃO DE EVENTOS",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "CLEMERSON LOPES",
      role: "ESPECIALISTA EM DESIGN ORGANIZACIONAL",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "JORGE HENRIQUE",
      role: "DESENVOLVEDOR FULLSTACK",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
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
      
      {/* Featured Organizers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Organizadores</span>
              <span className="text-foreground"> em Destaque</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça os organizadores mais bem avaliados da plataforma e explore seus eventos incríveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredOrganizers.map((organizer) => (
              <OrganizerProfile key={organizer.id} organizer={organizer} />
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="text-foreground">PARA QUEM </span>
              <span className="text-primary">É A PLATAFORMA</span>
              <span className="text-foreground"> BORA CORRER?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-glow bg-background/5 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  ATLETAS
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">QUE BUSCAM</h3>
                <p className="text-2xl font-black text-primary">OTIMIZAR SEUS RESULTADOS</p>
              </CardContent>
            </Card>

            <Card className="card-glow bg-background/5 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hash className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  ORGANIZADORES
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">QUE BUSCAM</h3>
                <p className="text-2xl font-black text-primary">PROFISSIONALIZAR SEUS EVENTOS</p>
              </CardContent>
            </Card>

            <Card className="card-glow bg-background/5 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  ASSESSORIAS
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
              <Card className="card-glow bg-background/5 backdrop-blur-sm border-primary/20">
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

              <Card className="card-glow bg-background/5 backdrop-blur-sm border-primary/20">
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
              <Card className="card-glow bg-background/5 backdrop-blur-sm border-primary/20">
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

      <StatsSection />
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;
