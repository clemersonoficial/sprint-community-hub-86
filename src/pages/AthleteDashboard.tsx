
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Activity, Heart, MapPin, Trophy, Users, Settings, LogOut, Target, Bell, Watch, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialFeed from "@/components/SocialFeed";
import SmartWatchIntegration from "@/components/SmartWatchIntegration";
import { useTheme } from "@/components/ThemeProvider";

const AthleteDashboard = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  
  const [stats] = useState({
    totalRuns: 45,
    totalDistance: 387.5,
    avgPace: "5:42",
    calories: 15680
  });

  const [notifications] = useState([
    { id: 1, type: "event", message: "Kit disponível para retirada - Maratona SP", time: "2h atrás", read: false },
    { id: 2, type: "achievement", message: "Parabéns! Você completou 100km este mês!", time: "1 dia atrás", read: false },
    { id: 3, type: "community", message: "Nova mensagem no grupo 'Corredores SP'", time: "2 dias atrás", read: true }
  ]);

  const [upcomingEvents] = useState([
    { id: 1, name: "Maratona de São Paulo 2024", date: "2024-04-15", status: "Confirmado" },
    { id: 2, name: "Corrida Noturna RJ", date: "2024-03-20", status: "Aguardando" }
  ]);

  const [recentRuns] = useState([
    { id: 1, date: "2024-01-20", distance: 8.5, time: "48:30", pace: "5:42" },
    { id: 2, date: "2024-01-18", distance: 5.0, time: "28:15", pace: "5:39" },
    { id: 3, date: "2024-01-15", distance: 12.0, time: "68:24", pace: "5:42" }
  ]);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-dark border-b border-border p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12 border-2 border-primary">
              <AvatarImage src="/api/placeholder/48/48" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold gradient-text">Maria Santos</h1>
              <p className="text-sm text-muted-foreground">Atleta • Corredor Nível Pro</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {notifications.filter(n => !n.read).length}
              </span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="feed">Feed Social</TabsTrigger>
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            <TabsTrigger value="events">Meus Eventos</TabsTrigger>
            <TabsTrigger value="devices">Dispositivos</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="card-glow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Corridas</CardTitle>
                  <Activity className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalRuns}</div>
                  <p className="text-xs text-muted-foreground">+3 esta semana</p>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Distância Total</CardTitle>
                  <MapPin className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalDistance}km</div>
                  <p className="text-xs text-muted-foreground">+15.5km esta semana</p>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pace Médio</CardTitle>
                  <Target className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.avgPace}/km</div>
                  <p className="text-xs text-muted-foreground">Melhorando!</p>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Calorias</CardTitle>
                  <Heart className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.calories.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Este mês</p>
                </CardContent>
              </Card>
            </div>

            {/* Social Feed */}
            <SocialFeed />
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            {/* Progress Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Meta Mensal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Distância: 68/100 km</span>
                        <span className="text-sm text-primary">68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Corridas: 12/20</span>
                        <span className="text-sm text-primary">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Conquistas Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-8 h-8 text-yellow-500" />
                      <div>
                        <p className="font-medium">Primeira Maratona</p>
                        <p className="text-sm text-muted-foreground">Completada em 3h 45m</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-8 h-8 text-silver" />
                      <div>
                        <p className="font-medium">100km no Mês</p>
                        <p className="text-sm text-muted-foreground">Meta atingida!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Atividades Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRuns.map((run) => (
                    <div key={run.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Activity className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-medium">Corrida - {run.distance}km</p>
                          <p className="text-sm text-muted-foreground">{run.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{run.time}</p>
                        <p className="text-sm text-muted-foreground">Pace: {run.pace}/km</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Próximos Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="text-right space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === "Confirmado" 
                            ? "bg-green-500/20 text-green-600" 
                            : "bg-yellow-500/20 text-yellow-600"
                        }`}>
                          {event.status}
                        </span>
                        <Button size="sm" variant="outline">Ver Detalhes</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="flex gap-4">
              <Button className="btn-primary" onClick={() => navigate("/eventos")}>
                <Trophy className="w-4 h-4 mr-2" />
                VER EVENTOS
              </Button>
              <Button variant="outline" onClick={() => navigate("/comunidades")}>
                <Users className="w-4 h-4 mr-2" />
                COMUNIDADES
              </Button>
              <Button variant="outline" onClick={() => navigate("/inscricoes")}>
                <Activity className="w-4 h-4 mr-2" />
                MINHAS INSCRIÇÕES
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="devices">
            <SmartWatchIntegration />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Notificações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-4 border rounded-lg ${
                      !notification.read ? "border-primary bg-primary/5" : "border-border"
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium">{notification.message}</p>
                          <p className="text-sm text-muted-foreground">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AthleteDashboard;
