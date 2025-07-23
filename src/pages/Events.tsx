
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Clock, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Events = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("todos");

  const events = [
    {
      id: 1,
      name: "Maratona de São Paulo 2024",
      date: "2024-04-15",
      time: "06:00",
      location: "Parque do Ibirapuera, São Paulo",
      participants: 5000,
      maxParticipants: 8000,
      price: "R$ 120,00",
      category: "maratona",
      image: "/api/placeholder/400/200",
      description: "A maior maratona urbana do Brasil retorna em 2024!"
    },
    {
      id: 2,
      name: "Corrida Noturna da Cidade",
      date: "2024-03-20",
      time: "19:00",
      location: "Centro Histórico, Rio de Janeiro",
      participants: 1200,
      maxParticipants: 2000,
      price: "R$ 80,00",
      category: "5k",
      image: "/api/placeholder/400/200",
      description: "Corrida noturna pelas ruas históricas do Rio de Janeiro"
    },
    {
      id: 3,
      name: "Trail Running Serra da Mantiqueira",
      date: "2024-05-10",
      time: "07:30",
      location: "Campos do Jordão, SP",
      participants: 300,
      maxParticipants: 500,
      price: "R$ 150,00",
      category: "trail",
      image: "/api/placeholder/400/200",
      description: "Desafie-se nas trilhas da Serra da Mantiqueira"
    },
    {
      id: 4,
      name: "Corrida Familiar do Parque",
      date: "2024-02-25",
      time: "08:00",
      location: "Parque Villa-Lobos, São Paulo",
      participants: 800,
      maxParticipants: 1500,
      price: "R$ 45,00",
      category: "3k",
      image: "/api/placeholder/400/200",
      description: "Evento ideal para toda família, com percursos de 3km e 5km"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "todos" || event.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleEventClick = (eventId: number) => {
    navigate(`/evento/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Eventos</span>
              <span className="text-foreground"> de Corrida</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre o evento perfeito para desafiar seus limites
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar eventos por nome ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filtrar por categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os eventos</SelectItem>
                <SelectItem value="3k">3km</SelectItem>
                <SelectItem value="5k">5km</SelectItem>
                <SelectItem value="10k">10km</SelectItem>
                <SelectItem value="meia">Meia Maratona</SelectItem>
                <SelectItem value="maratona">Maratona</SelectItem>
                <SelectItem value="trail">Trail Running</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card 
                key={event.id} 
                className="card-glow hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => handleEventClick(event.id)}
              >
                <div className="aspect-video bg-gradient-primary rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {event.category.toUpperCase()}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{event.name}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date} às {event.time}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    {event.participants}/{event.maxParticipants} inscritos
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-bold text-primary">{event.price}</span>
                    <Button className="btn-primary">
                      VER DETALHES
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Nenhum evento encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
