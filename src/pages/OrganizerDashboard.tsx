
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar, Users, DollarSign, Settings, LogOut, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrganizerDashboard = () => {
  const navigate = useNavigate();
  const [events] = useState([
    { id: 1, name: "Corrida do Parque", date: "2024-02-15", participants: 120, revenue: "R$ 6.000" },
    { id: 2, name: "Marathon São Paulo", date: "2024-03-10", participants: 300, revenue: "R$ 15.000" },
    { id: 3, name: "Night Run", date: "2024-04-05", participants: 80, revenue: "R$ 4.000" }
  ]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-dark border-b border-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">PAINEL ORGANIZADOR</h1>
              <p className="text-sm text-muted-foreground">Bem-vindo, João Silva</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
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
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Eventos</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 este mês</p>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Participantes</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+180 este mês</p>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 142,500</div>
              <p className="text-xs text-muted-foreground">+12% este mês</p>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximo Evento</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 FEV</div>
              <p className="text-xs text-muted-foreground">Corrida do Parque</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mb-8">
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            CRIAR NOVO EVENTO
          </Button>
          <Button variant="outline">
            GERENCIAR INSCRIÇÕES
          </Button>
          <Button variant="outline">
            RELATÓRIOS
          </Button>
        </div>

        {/* Events Table */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle>Meus Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{event.name}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{event.participants} participantes</p>
                    <p className="text-sm text-primary">{event.revenue}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Editar
                    </Button>
                    <Button size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
