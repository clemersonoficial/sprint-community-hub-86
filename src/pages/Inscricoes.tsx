
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Trophy, Clock, Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Inscricoes = () => {
  const navigate = useNavigate();

  const confirmedRegistrations = [
    {
      id: 1,
      eventName: "Maratona de São Paulo 2024",
      date: "2024-04-15",
      time: "06:00",
      location: "Parque do Ibirapuera, São Paulo",
      status: "confirmada",
      number: "M2024-5847",
      category: "Maratona 42k",
      price: "R$ 120,00"
    },
    {
      id: 2,
      eventName: "Corrida Noturna da Cidade",
      date: "2024-03-20",
      time: "19:00",
      location: "Centro Histórico, Rio de Janeiro",
      status: "confirmada",
      number: "CN2024-1234",
      category: "5k",
      price: "R$ 80,00"
    }
  ];

  const pastRegistrations = [
    {
      id: 3,
      eventName: "Corrida de Ano Novo 2024",
      date: "2024-01-01",
      time: "07:00",
      location: "Copacabana, Rio de Janeiro",
      status: "finalizada",
      number: "NY2024-9876",
      category: "10k",
      price: "R$ 60,00",
      time_result: "42:35",
      position: 156
    },
    {
      id: 4,
      eventName: "Trail Running São Roque",
      date: "2023-12-10",
      time: "08:00",
      location: "São Roque, SP",
      status: "finalizada",
      number: "TR2023-4567",
      category: "Trail 15k",
      price: "R$ 90,00",
      time_result: "1:15:22",
      position: 89
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmada":
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Confirmada</Badge>;
      case "finalizada":
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Finalizada</Badge>;
      default:
        return <Badge variant="outline">Pendente</Badge>;
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
              <span className="gradient-text">Minhas</span>
              <span className="text-foreground"> Inscrições</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acompanhe suas inscrições e resultados
            </p>
          </div>

          <Tabs defaultValue="confirmadas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="confirmadas">Inscrições Confirmadas</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
            </TabsList>

            <TabsContent value="confirmadas" className="space-y-6">
              {confirmedRegistrations.length > 0 ? (
                <div className="grid gap-6">
                  {confirmedRegistrations.map((registration) => (
                    <Card key={registration.id} className="card-glow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-2">{registration.eventName}</CardTitle>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Trophy className="w-4 h-4 mr-1" />
                                #{registration.number}
                              </span>
                              <span>{registration.category}</span>
                            </div>
                          </div>
                          {getStatusBadge(registration.status)}
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            <div>
                              <p className="font-medium text-foreground">{registration.date}</p>
                              <p className="text-sm">às {registration.time}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <div>
                              <p className="font-medium text-foreground">Local</p>
                              <p className="text-sm">{registration.location}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <Trophy className="w-4 h-4 mr-2" />
                            <div>
                              <p className="font-medium text-foreground">Valor Pago</p>
                              <p className="text-sm">{registration.price}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Button 
                            variant="outline" 
                            onClick={() => navigate(`/evento/${registration.id}`)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Evento
                          </Button>
                          <Button variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Baixar Comprovante
                          </Button>
                          <Button variant="outline">
                            Kit de Retirada
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="card-glow text-center py-12">
                  <CardContent>
                    <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Nenhuma inscrição confirmada</h3>
                    <p className="text-muted-foreground mb-6">
                      Você ainda não tem inscrições confirmadas para eventos futuros.
                    </p>
                    <Button className="btn-primary" onClick={() => navigate("/eventos")}>
                      Buscar Eventos
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="historico" className="space-y-6">
              {pastRegistrations.length > 0 ? (
                <div className="grid gap-6">
                  {pastRegistrations.map((registration) => (
                    <Card key={registration.id} className="card-glow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-2">{registration.eventName}</CardTitle>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Trophy className="w-4 h-4 mr-1" />
                                #{registration.number}
                              </span>
                              <span>{registration.category}</span>
                            </div>
                          </div>
                          {getStatusBadge(registration.status)}
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            <div>
                              <p className="font-medium text-foreground">{registration.date}</p>
                              <p className="text-sm">às {registration.time}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <div>
                              <p className="font-medium text-foreground">Local</p>
                              <p className="text-sm">{registration.location}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            <div>
                              <p className="font-medium text-foreground">Tempo</p>
                              <p className="text-sm text-primary font-bold">{registration.time_result}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <Trophy className="w-4 h-4 mr-2" />
                            <div>
                              <p className="font-medium text-foreground">Posição</p>
                              <p className="text-sm text-primary font-bold">{registration.position}º</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Certificado
                          </Button>
                          <Button variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Resultado Oficial
                          </Button>
                          <Button variant="outline">
                            Ver Fotos
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="card-glow text-center py-12">
                  <CardContent>
                    <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Nenhum evento finalizado</h3>
                    <p className="text-muted-foreground">
                      Seu histórico de participações aparecerá aqui após completar eventos.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Inscricoes;
