
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Route, Trophy, Clock } from 'lucide-react';

interface RouteMapProps {
  eventId: number;
}

const RouteMap: React.FC<RouteMapProps> = ({ eventId }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  // Dados do percurso (simulado)
  const routeData = {
    distance: "42.2 km",
    elevation: "150m",
    startPoint: "Parque do Ibirapuera",
    endPoint: "Praça da Sé",
    waypoints: [
      { name: "Parque do Ibirapuera", km: 0 },
      { name: "Av. Paulista", km: 8 },
      { name: "Centro Histórico", km: 21 },
      { name: "Marginal Tietê", km: 32 },
      { name: "Praça da Sé", km: 42.2 }
    ],
    hydrationPoints: [5, 10, 15, 20, 25, 30, 35, 40],
    medicalPoints: [12, 25, 38]
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Simulação de um mapa interativo
    const canvas = document.createElement('canvas');
    canvas.width = mapContainer.current.offsetWidth;
    canvas.height = 400;
    canvas.style.width = '100%';
    canvas.style.height = '400px';
    canvas.style.borderRadius = '8px';
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Fundo do mapa
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar o percurso
      ctx.strokeStyle = '#0066cc';
      ctx.lineWidth = 4;
      ctx.beginPath();
      
      // Percurso sinuoso simulado
      const points = [
        { x: 50, y: 100 },
        { x: 150, y: 80 },
        { x: 250, y: 120 },
        { x: 350, y: 90 },
        { x: 450, y: 150 },
        { x: 550, y: 120 },
        { x: 650, y: 140 },
        { x: 750, y: 100 }
      ];
      
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
      
      // Pontos de largada e chegada
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(points[0].x, points[0].y, 8, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(points[points.length - 1].x, points[points.length - 1].y, 8, 0, 2 * Math.PI);
      ctx.fill();
      
      // Pontos de hidratação
      ctx.fillStyle = '#3b82f6';
      routeData.hydrationPoints.forEach((km, index) => {
        const pointIndex = Math.floor((km / 42.2) * (points.length - 1));
        if (points[pointIndex]) {
          ctx.beginPath();
          ctx.arc(points[pointIndex].x, points[pointIndex].y - 20, 4, 0, 2 * Math.PI);
          ctx.fill();
        }
      });
    }
    
    mapContainer.current.appendChild(canvas);
    
    return () => {
      if (mapContainer.current) {
        mapContainer.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Route className="w-5 h-5 mr-2 text-primary" />
            Mapa do Percurso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            ref={mapContainer} 
            className="w-full h-96 bg-muted rounded-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-muted-foreground">Carregando mapa...</div>
            </div>
          </div>
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-2 text-green-500" />
              <span className="font-medium">Largada:</span>
              <span className="ml-1">{routeData.startPoint}</span>
            </div>
            <div className="flex items-center text-sm">
              <Trophy className="w-4 h-4 mr-2 text-red-500" />
              <span className="font-medium">Chegada:</span>
              <span className="ml-1">{routeData.endPoint}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-lg">Informações do Percurso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Distância Total</span>
              <span className="font-bold text-primary">{routeData.distance}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Elevação</span>
              <span className="font-bold">{routeData.elevation}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Pontos de Hidratação</span>
              <span className="font-bold">{routeData.hydrationPoints.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Postos Médicos</span>
              <span className="font-bold">{routeData.medicalPoints.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-lg">Pontos de Referência</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {routeData.waypoints.map((waypoint, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-medium">{waypoint.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{waypoint.km} km</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Clock className="w-5 h-5 mr-2 text-primary" />
            Cronograma do Evento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Dia do Evento</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 05:00 - Abertura da área de largada</li>
                <li>• 05:30 - Aquecimento coletivo</li>
                <li>• 06:00 - Largada oficial</li>
                <li>• 10:00 - Previsão dos primeiros finalizadores</li>
                <li>• 12:00 - Encerramento oficial</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Serviços Disponíveis</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Guarda-volumes gratuito</li>
                <li>• Banheiros químicos no percurso</li>
                <li>• Ambulância médica</li>
                <li>• Cronometragem eletrônica</li>
                <li>• Fotografia profissional</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RouteMap;
