import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Trophy, Share2, Heart, ArrowLeft, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import RouteMap from "@/components/RouteMap";

const EventDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);

  // Simulando dados do evento baseado no ID
  const event = {
    id: Number(id),
    name: "Maratona de São Paulo 2024",
    date: "2024-04-15",
    time: "06:00",
    location: "Parque do Ibirapuera, São Paulo",
    participants: 5000,
    maxParticipants: 8000,
    price: "R$ 120,00",
    category: "maratona",
    description: "A maior maratona urbana do Brasil retorna em 2024! Um percurso de 42km pelas principais avenidas e pontos turísticos de São Paulo.",
    organizer: {
      id: 1,
      name: "RunSP Eventos",
      image: "/api/placeholder/80/80",
      rating: 5,
      totalEvents: 47,
      location: "São Paulo, SP"
    },
    prizes: [
      "1º lugar: R$ 5.000 + Troféu",
      "2º lugar: R$ 3.000 + Medalha",
      "3º lugar: R$ 1.500 + Medalha",
      "Todos os finalizadores: Medalha personalizada"
    ],
    schedule: [
      "05:00 - Abertura da área de largada",
      "05:30 - Aquecimento coletivo",
      "06:00 - Largada oficial",
      "10:00 - Previsão dos primeiros finalizadores",
      "12:00 - Encerramento oficial"
    ],
    requirements: [
      "Idade mínima: 18 anos",
      "Atestado médico obrigatório",
      "Experiência comprovada em provas de longa distância",
      "Seguro de vida recomendado"
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

  const handleRegister = () => {
    setIsRegistered(true);
    // Aqui seria feita a integração com sistema de pagamento
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-6 text-primary hover:text-primary/80"
            onClick={() => navigate("/eventos")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos eventos
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Event Header */}
              <Card className="card-glow">
                <div className="aspect-video bg-gradient-primary rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {event.category.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{event.name}</CardTitle>
                      <p className="text-muted-foreground">Organizado por {event.organizer.name}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-lg mb-6">{event.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-5 h-5 mr-3" />
                      <div>
                        <p className="font-medium text-foreground">{event.date}</p>
                        <p className="text-sm">às {event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3" />
                      <div>
                        <p className="font-medium text-foreground">Local de Largada</p>
                        <p className="text-sm">{event.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-5 h-5 mr-3" />
                      <div>
                        <p className="font-medium text-foreground">Participantes</p>
                        <p className="text-sm">{event.participants}/{event.maxParticipants} inscritos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Trophy className="w-5 h-5 mr-3" />
                      <div>
                        <p className="font-medium text-foreground">Categoria</p>
                        <p className="text-sm">42,195 km - Maratona</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Details Tabs */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="w-5 h-5 mr-2" />
                      Premiação
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {event.prizes.map((prize, index) => (
                        <li key={index} className="text-sm">{prize}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Programação
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {event.schedule.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Requirements */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Requisitos para Participação</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Route Map */}
              <RouteMap eventId={event.id} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Organizer Profile */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Organizador</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={event.organizer.image}
                      alt={event.organizer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{event.organizer.name}</h4>
                      <div className="flex items-center gap-1">
                        {renderStars(event.organizer.rating)}
                        <span className="text-sm text-muted-foreground ml-1">
                          ({event.organizer.rating}.0)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.organizer.location}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {event.organizer.totalEvents} eventos organizados
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/organizador/perfil/${event.organizer.id}`)}
                  >
                    VER PERFIL COMPLETO
                  </Button>
                </CardContent>
              </Card>

              {/* Registration */}
              <Card className="card-glow sticky top-24">
                <CardHeader>
                  <CardTitle className="text-center">Inscrição</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{event.price}</div>
                    <p className="text-sm text-muted-foreground">Taxa de inscrição</p>
                  </div>
                  
                  {!isRegistered ? (
                    <Button 
                      className="w-full btn-primary" 
                      onClick={() => navigate(`/evento/${id}/inscricao`)}
                    >
                      INSCREVER-SE AGORA
                    </Button>
                  ) : (
                    <div className="text-center space-y-2">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <p className="text-green-600 font-medium">✓ Inscrição Confirmada!</p>
                        <p className="text-sm text-muted-foreground">Você receberá um email com os detalhes</p>
                      </div>
                      <Button variant="outline" className="w-full">
                        VER COMPROVANTE
                      </Button>
                    </div>
                  )}
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>Pagamento seguro via</p>
                    <p className="font-medium">Mercado Pago & ASAS</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">O que está incluso:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Kit do atleta</li>
                      <li>• Chip de cronometragem</li>
                      <li>• Camiseta do evento</li>
                      <li>• Medalha de participação</li>
                      <li>• Hidratação no percurso</li>
                      <li>• Seguro do evento</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
