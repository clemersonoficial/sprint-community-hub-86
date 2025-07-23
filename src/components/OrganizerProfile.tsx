
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OrganizerProfileProps {
  organizer: {
    id: number;
    name: string;
    image: string;
    banner: string;
    rating: number;
    totalEvents: number;
    totalParticipants: number;
    description: string;
    location: string;
    categories: string[];
    recentEvents: {
      id: number;
      name: string;
      date: string;
      participants: number;
    }[];
  };
}

const OrganizerProfile = ({ organizer }: OrganizerProfileProps) => {
  const navigate = useNavigate();

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

  const handleViewProfile = () => {
    navigate(`/organizador/perfil/${organizer.id}`);
  };

  return (
    <Card className="card-glow overflow-hidden">
      {/* Banner */}
      <div 
        className="h-32 bg-gradient-primary relative"
        style={{ 
          backgroundImage: `url(${organizer.banner})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Profile Section */}
      <div className="relative px-6 pb-6">
        {/* Profile Image */}
        <div className="flex items-end -mt-16 mb-4">
          <div className="relative">
            <img
              src={organizer.image}
              alt={organizer.name}
              className="w-24 h-24 rounded-full border-4 border-background object-cover"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-background" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center gap-2 mb-1">
              {renderStars(organizer.rating)}
              <span className="text-sm text-muted-foreground">
                ({organizer.rating}.0)
              </span>
            </div>
          </div>
        </div>

        <CardHeader className="px-0 pb-4">
          <CardTitle className="text-xl">{organizer.name}</CardTitle>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {organizer.location}
          </div>
        </CardHeader>

        <CardContent className="px-0 space-y-4">
          <p className="text-sm text-muted-foreground">{organizer.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="text-lg font-bold">{organizer.totalEvents}</div>
              <div className="text-xs text-muted-foreground">Eventos</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Users className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="text-lg font-bold">{organizer.totalParticipants}</div>
              <div className="text-xs text-muted-foreground">Participantes</div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {organizer.categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>

          {/* Recent Events */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Eventos Recentes</h4>
            {organizer.recentEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Trophy className="w-3 h-3 text-primary" />
                  <span>{event.name}</span>
                </div>
                <div className="text-muted-foreground">
                  {event.participants} atletas
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full btn-primary mt-4" onClick={handleViewProfile}>
            VER PERFIL COMPLETO
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default OrganizerProfile;
