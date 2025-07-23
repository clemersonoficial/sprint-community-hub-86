import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Watch, Smartphone, Activity, CheckCircle, AlertCircle } from "lucide-react";

interface Device {
  id: string;
  name: string;
  icon: React.ReactNode;
  connected: boolean;
  lastSync?: string;
  requiresToken: boolean;
}

const SmartWatchIntegration = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState("");
  const [connecting, setConnecting] = useState(false);

  const [devices, setDevices] = useState<Device[]>([
    {
      id: "garmin",
      name: "Garmin Connect",
      icon: <Watch className="w-8 h-8 text-blue-600" />,
      connected: false,
      requiresToken: true
    },
    {
      id: "strava",
      name: "Strava",
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      connected: true,
      lastSync: "Há 2 horas",
      requiresToken: true
    },
    {
      id: "apple",
      name: "Apple Health",
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      connected: false,
      requiresToken: false
    },
    {
      id: "samsung",
      name: "Samsung Health",
      icon: <Activity className="w-8 h-8 text-green-500" />,
      connected: false,
      requiresToken: true
    }
  ]);

  const handleConnect = async (deviceId: string) => {
    setConnecting(true);
    setSelectedDevice(deviceId);
    
    // Simular conexão
    setTimeout(() => {
      setDevices(devices.map(device => {
        if (device.id === deviceId) {
          return {
            ...device,
            connected: true,
            lastSync: "Agora"
          };
        }
        return device;
      }));
      setConnecting(false);
      setSelectedDevice(null);
      setApiKey("");
    }, 2000);
  };

  const handleDisconnect = (deviceId: string) => {
    setDevices(devices.map(device => {
      if (device.id === deviceId) {
        return {
          ...device,
          connected: false,
          lastSync: undefined
        };
      }
      return device;
    }));
  };

  return (
    <div className="space-y-6">
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Watch className="w-5 h-5 text-primary" />
            <span>Dispositivos Conectados</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {devices.map((device) => (
            <div key={device.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-4">
                {device.icon}
                <div>
                  <h3 className="font-semibold">{device.name}</h3>
                  <div className="flex items-center space-x-2">
                    {device.connected ? (
                      <>
                        <Badge className="bg-green-500">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Conectado
                        </Badge>
                        {device.lastSync && (
                          <span className="text-sm text-muted-foreground">
                            Última sinc: {device.lastSync}
                          </span>
                        )}
                      </>
                    ) : (
                      <Badge variant="secondary">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Desconectado
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {device.connected ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDisconnect(device.id)}
                  >
                    Desconectar
                  </Button>
                ) : (
                  <Button
                    className="btn-primary"
                    size="sm"
                    onClick={() => device.requiresToken ? setSelectedDevice(device.id) : handleConnect(device.id)}
                    disabled={connecting}
                  >
                    {connecting && selectedDevice === device.id ? "Conectando..." : "Conectar"}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Token Input Modal */}
      {selectedDevice && (
        <Card className="card-glow border-primary">
          <CardHeader>
            <CardTitle>
              Conectar {devices.find(d => d.id === selectedDevice)?.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Para conectar este dispositivo, você precisa fornecer sua chave de API ou token de acesso.
            </p>
            
            <div className="space-y-2">
              <Label htmlFor="apiKey">Token de API / Chave de Acesso</Label>
              <Input
                id="apiKey"
                type="password"
                placeholder="Cole aqui seu token..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>

            <div className="bg-muted/50 p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-2">Como obter o token:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>1. Acesse as configurações da sua conta no app</li>
                <li>2. Procure por "API" ou "Desenvolvedores"</li>
                <li>3. Gere um novo token de acesso</li>
                <li>4. Cole o token aqui para conectar</li>
              </ul>
            </div>

            <div className="flex space-x-2">
              <Button
                className="btn-primary flex-1"
                onClick={() => handleConnect(selectedDevice)}
                disabled={!apiKey || connecting}
              >
                {connecting ? "Conectando..." : "Conectar Dispositivo"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedDevice(null)}
              >
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SmartWatchIntegration;