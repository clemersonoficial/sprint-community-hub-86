import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Clipboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Login = () => {
  const navigate = useNavigate();

  const handleAthleteLogin = () => {
    navigate("/atleta/login");
  };

  const handleOrganizerLogin = () => {
    navigate("/organizador/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-black mb-8">
              <span className="text-primary">ESCOLHA SEU</span>
              <br />
              <span className="text-foreground">TIPO DE ACESSO</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Selecione como você deseja acessar a plataforma Bora Correr
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Atleta Login */}
              <Card className="card-glow hover:scale-105 transition-all duration-300 cursor-pointer" onClick={handleAthleteLogin}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-primary">SOU ATLETA</CardTitle>
                  <p className="text-muted-foreground mb-6">
                    Acesse sua área para encontrar corridas, acompanhar seu progresso e conectar-se com outros corredores.
                  </p>
                  <Button className="w-full" size="lg">
                    ENTRAR COMO ATLETA
                  </Button>
                </CardContent>
              </Card>

              {/* Organizador Login */}
              <Card className="card-glow hover:scale-105 transition-all duration-300 cursor-pointer" onClick={handleOrganizerLogin}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clipboard className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-secondary">SOU ORGANIZADOR</CardTitle>
                  <p className="text-muted-foreground mb-6">
                    Acesse sua área para criar e gerenciar eventos de corrida com ferramentas profissionais.
                  </p>
                  <Button variant="outline" className="w-full" size="lg">
                    ENTRAR COMO ORGANIZADOR
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Não tem uma conta ainda?{" "}
                <Button variant="link" className="p-0 h-auto text-primary">
                  Cadastre-se aqui
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;