
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Users, Trophy, ArrowLeft, Phone, Mail, Globe, MessageCircle, Eye } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import EventPhotoGallery from "@/components/EventPhotoGallery";

const OrganizerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  // Mock data - em produção viria de uma API
  const organizer = {
    id: Number(id),
    name: "RunSP Eventos",
    image: "/api/placeholder/150/150",
    banner: "/api/placeholder/800/300",
    rating: 4.8,
    totalEvents: 47,
    totalParticipants: 12847,
    description: "Organizador líder em eventos de corrida em São Paulo. Especializado em maratonas urbanas e corridas temáticas com mais de 10 anos de experiência no mercado esportivo.",
    location: "São Paulo, SP",
    categories: ["Maratona", "Meia Maratona", "10K", "5K"],
    phone: "(11) 99999-9999",
    email: "contato@runsp.com.br",
    website: "www.runsp.com.br",
    memberSince: "2014",
    recentEvents: [
      { 
        id: 1, 
        name: "Maratona de São Paulo 2024", 
        date: "2024-03-15", 
        participants: 5000, 
        status: "Concluído",
        rating: 4.9,
        location: "Parque do Ibirapuera",
        photos: [
          "/api/placeholder/300/300",
          "/api/placeholder/300/300",
          "/api/placeholder/300/300",
          "/api/placeholder/300/300",
          "/api/placeholder/300/300",
          "/api/placeholder/300/300"
        ],
        achievements: [
          { athleteName: "João Silva", position: 1, time: "2:15:32", category: "Masculino Geral" },
          { athleteName: "Maria Santos", position: 1, time: "2:28:45", category: "Feminino Geral" },
          { athleteName: "Pedro Costa", position: 2, time: "2:18:15", category: "Masculino Geral" },
          { athleteName: "Ana Paula", position: 2, time: "2:31:22", category: "Feminino Geral" },
          { athleteName: "Carlos Oliveira", position: 3, time: "2:19:08", category: "Masculino Geral" }
        ]
      },
      { 
        id: 2, 
        name: "Night Run SP", 
        date: "2024-02-20", 
        participants: 800, 
        status: "Concluído",
        rating: 4.7,
        location: "Av. Paulista",
        photos: [
          "/api/placeholder/300/300",
          "/api/placeholder/300/300",
          "/api/placeholder/300/300",
          "/api/placeholder/300/300"
        ],
        achievements: [
          { athleteName: "Rafael Lima", position: 1, time: "32:15", category: "10K Masculino" },
          { athleteName: "Julia Mendes", position: 1, time: "35:22", category: "10K Feminino" },
          { athleteName: "Bruno Alves", position: 2, time: "32:45", category: "10K Masculino" }
        ]
      },
      { 
        id: 3, 
        name: "Corrida do Parque", 
        date: "2024-01-28", 
        participants: 1200, 
        status: "Concluído",
        rating: 4.6,
        location: "Parque Villa Lobos",
        photos: [
          "/api/placeholder/300/300",
          "/api/placeholder/300/300",
          "/api/placeholder/300/300"
        ],
        achievements: [
          { athleteName: "Lucas Ferreira", position: 1, time: "16:30", category: "5K Masculino" },
          { athleteName: "Carla Ribeiro", position: 1, time: "18:15", category: "5K Feminino" }
        ]
      },
      { 
        id: 4, 
        name: "Maratona Paulista", 
        date: "2024-05-15", 
        participants: 3000, 
        status: "Próximo",
        rating: 0,
        location: "Parque do Ibirapuera",
        photos: [],
        achievements: []
      },
      { 
        id: 5, 
        name: "Trail Run SP", 
        date: "2024-06-10", 
        participants: 500, 
        status: "Próximo",
        rating: 0,
        location: "Serra da Cantareira",
        photos: [],
        achievements: []
      },
    ],
    achievements: [
      "Melhor Organizador de Corrida SP 2023",
      "Evento Mais Seguro do Ano 2022",
      "Maior Participação Feminina 2021",
      "Inovação em Eventos Esportivos 2020"
    ],
    topFeedbacks: [
      {
        athleteName: "João Silva",
        rating: 5,
        comment: "Evento incrível! Organização perfeita, hidratação excelente e o percurso muito bem sinalizado. Já me inscrevi para o próximo!",
        eventName: "Maratona de São Paulo 2024",
        date: "2024-03-15"
      },
      {
        athleteName: "Maria Santos",
        rating: 5,
        comment: "Melhor corrida que já participei! Kit de qualidade, largada pontual e chegada emocionante. Parabéns à equipe!",
        eventName: "Night Run SP",
        date: "2024-02-20"
      },
      {
        athleteName: "Pedro Costa",
        rating: 4,
        comment: "Organização muito boa, só faltou mais pontos de hidratação no meio do percurso. Mas no geral foi excelente!",
        eventName: "Corrida do Parque",
        date: "2024-01-28"
      }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const handleViewEventDetails = (eventId: number) => {
    setSelectedEvent(eventId);
  };

  const selectedEventData = organizer.recentEvents.find(event => event.id === selectedEvent);

  if (selectedEvent && selectedEventData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              className="mb-6 text-primary hover:text-primary/80"
              onClick={() => setSelectedEvent(null)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Perfil
            </Button>
            
            <EventPhotoGallery event={selectedEventData} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-6 text-primary hover:text-primary/80"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          {/* Profile Header */}
          <Card className="card-glow overflow-hidden mb-8">
            <div 
              className="h-64 bg-gradient-primary relative"
              style={{ 
                backgroundImage: `url(${organizer.banner})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative px-8 pb-8">
              {/* Profile Image */}
              <div className="flex items-end -mt-24 mb-6">
                <div className="relative">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-32 h-32 rounded-full border-4 border-background object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-background" />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{organizer.name}</h1>
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(Math.floor(organizer.rating))}
                    <span className="text-muted-foreground">({organizer.rating})</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {organizer.location}
                  </div>
                  <p className="text-muted-foreground mb-6">{organizer.description}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      {organizer.phone}
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      {organizer.email}
                    </div>
                    <div className="flex items-center text-sm">
                      <Globe className="w-4 h-4 mr-2 text-primary" />
                      {organizer.website}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center p-4">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{organizer.totalEvents}</div>
                    <div className="text-sm text-muted-foreground">Eventos Realizados</div>
                  </Card>
                  <Card className="text-center p-4">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{organizer.totalParticipants.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Participantes</div>
                  </Card>
                  <Card className="text-center p-4">
                    <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{organizer.achievements.length}</div>
                    <div className="text-sm text-muted-foreground">Conquistas</div>
                  </Card>
                  <Card className="text-center p-4">
                    <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{organizer.memberSince}</div>
                    <div className="text-sm text-muted-foreground">Membro desde</div>
                  </Card>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events History */}
            <div className="lg:col-span-2 space-y-8">
              {/* Top Feedbacks */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Top Feedbacks dos Atletas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {organizer.topFeedbacks.map((feedback, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">{feedback.athleteName}</h4>
                            <p className="text-sm text-muted-foreground">{feedback.eventName} - {feedback.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {renderStars(feedback.rating)}
                          </div>
                        </div>
                        <p className="text-sm italic">"{feedback.comment}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Events with Ratings */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Histórico de Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {organizer.recentEvents.map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Trophy className="w-5 h-5 text-primary" />
                          <div>
                            <h4 className="font-medium">{event.name}</h4>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                            {event.status === "Concluído" && (
                              <div className="flex items-center gap-1 mt-1">
                                {renderStars(Math.floor(event.rating))}
                                <span className="text-sm text-muted-foreground">({event.rating})</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <Badge variant={event.status === "Concluído" ? "default" : "secondary"}>
                            {event.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground">
                            {event.participants} participantes
                          </p>
                          {event.status === "Concluído" && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewEventDetails(event.id)}
                              className="w-full"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Ver Detalhes
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Especialidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {organizer.categories.map((category, index) => (
                      <Badge key={index} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Conquistas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {organizer.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-primary" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Contato</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full btn-primary mb-3">
                    ENVIAR MENSAGEM
                  </Button>
                  <Button variant="outline" className="w-full">
                    SEGUIR ORGANIZADOR
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
