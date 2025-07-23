
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MapPin, Plus, Search, Crown, UserPlus, MessageCircle } from "lucide-react";
import Header from "@/components/Header";

const Comunidades = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const myCommunities = [
    {
      id: 1,
      name: "Corredores São Paulo",
      description: "Grupo oficial de corredores da capital paulista",
      members: 1247,
      location: "São Paulo, SP",
      isLeader: true,
      avatar: "/api/placeholder/80/80",
      lastActivity: "2 horas atrás"
    },
    {
      id: 2,
      name: "Trail Runners Brasil",
      description: "Apaixonados por corrida em trilhas",
      members: 856,
      location: "Nacional",
      isLeader: false,
      avatar: "/api/placeholder/80/80",
      lastActivity: "1 dia atrás"
    }
  ];

  const suggestedCommunities = [
    {
      id: 3,
      name: "Maratonistas Elite",
      description: "Para corredores sub-3h na maratona",
      members: 234,
      location: "Brasil",
      avatar: "/api/placeholder/80/80",
      category: "Elite"
    },
    {
      id: 4,
      name: "Corrida Noturna RJ",
      description: "Encontros semanais no Rio de Janeiro",
      members: 523,
      location: "Rio de Janeiro, RJ",
      avatar: "/api/placeholder/80/80",
      category: "Local"
    },
    {
      id: 5,
      name: "Iniciantes na Corrida",
      description: "Apoio para quem está começando",
      members: 1890,
      location: "Nacional",
      avatar: "/api/placeholder/80/80",
      category: "Iniciante"
    },
    {
      id: 6,
      name: "Ultra Trail Community",
      description: "Desafios de ultra distância",
      members: 312,
      location: "Internacional",
      avatar: "/api/placeholder/80/80",
      category: "Ultra"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: "Carlos Silva",
      action: "compartilhou um treino",
      community: "Corredores São Paulo",
      time: "30 min atrás",
      content: "21km em 1h45m - preparação para a maratona!"
    },
    {
      id: 2,
      user: "Ana Costa",
      action: "criou um evento",
      community: "Trail Runners Brasil",
      time: "2 horas atrás",
      content: "Trail na Serra da Cantareira - Domingo 8h"
    },
    {
      id: 3,
      user: "Roberto Alves",
      action: "postou uma dica",
      community: "Corredores São Paulo",
      time: "4 horas atrás",
      content: "Como evitar lesões durante treinos intensos"
    }
  ];

  const filteredSuggested = suggestedCommunities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Elite": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Local": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Iniciante": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Ultra": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Comunidades</span>
              <span className="text-foreground"> de Corrida</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conecte-se com outros corredores e compartilhe sua paixão
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* My Communities */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Minhas Comunidades</h2>
                  <Button className="btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Criar Comunidade
                  </Button>
                </div>

                <div className="grid gap-4">
                  {myCommunities.map((community) => (
                    <Card key={community.id} className="card-glow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={community.avatar} />
                            <AvatarFallback>{community.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold">{community.name}</h3>
                              {community.isLeader && (
                                <Crown className="w-4 h-4 text-yellow-500" />
                              )}
                            </div>
                            <p className="text-muted-foreground text-sm mb-3">{community.description}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {community.members} membros
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {community.location}
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                Última atividade: {community.lastActivity}
                              </span>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  Chat
                                </Button>
                                {community.isLeader && (
                                  <Button size="sm">
                                    Gerenciar
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Suggested Communities */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Comunidades Sugeridas</h2>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Buscar comunidades..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {filteredSuggested.map((community) => (
                    <Card key={community.id} className="card-glow hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={community.avatar} />
                            <AvatarFallback>{community.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{community.name}</h3>
                              <Badge className={getCategoryColor(community.category)}>
                                {community.category}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mb-3">{community.description}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {community.members}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {community.location}
                              </span>
                            </div>
                            
                            <Button size="sm" className="w-full">
                              <UserPlus className="w-4 h-4 mr-1" />
                              Participar
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Recent Activities */}
            <div className="space-y-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground mb-1">{activity.community}</p>
                          <p className="text-sm text-foreground">{activity.content}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Suas Estatísticas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Comunidades</span>
                    <span className="font-medium">{myCommunities.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Posts este mês</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Curtidas recebidas</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Rank na comunidade</span>
                    <span className="font-medium text-primary">#12</span>
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

export default Comunidades;
