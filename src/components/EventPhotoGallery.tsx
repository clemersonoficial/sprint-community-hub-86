
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Camera, Medal, Clock, MapPin } from "lucide-react";

interface EventPhotoGalleryProps {
  event: {
    id: number;
    name: string;
    date: string;
    location: string;
    participants: number;
    photos: string[];
    achievements: {
      athleteName: string;
      position: number;
      time: string;
      category: string;
    }[];
  };
}

const EventPhotoGallery = ({ event }: EventPhotoGalleryProps) => {
  return (
    <div className="space-y-6">
      {/* Event Header */}
      <Card className="card-glow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">{event.name}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  {event.participants} participantes
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              CONCLUÍDO
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Photo Gallery */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Galeria de Fotos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {event.photos.map((photo, index) => (
              <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={photo}
                  alt={`Foto do evento ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Medal className="w-5 h-5" />
            Conquistas dos Atletas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {event.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    achievement.position === 1 ? 'bg-yellow-500' :
                    achievement.position === 2 ? 'bg-gray-400' :
                    achievement.position === 3 ? 'bg-amber-600' : 'bg-primary'
                  }`}>
                    {achievement.position}
                  </div>
                  <div>
                    <p className="font-medium">{achievement.athleteName}</p>
                    <p className="text-sm text-muted-foreground">{achievement.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-lg">{achievement.time}</p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.position}º lugar
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventPhotoGallery;
