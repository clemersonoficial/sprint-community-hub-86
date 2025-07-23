import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, MapPin, Trophy, Clock } from "lucide-react";

interface FeedPost {
  id: number;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  type: "run" | "achievement" | "event" | "community";
  timestamp: string;
  content: string;
  data?: {
    distance?: number;
    time?: string;
    pace?: string;
    location?: string;
    eventName?: string;
    achievement?: string;
  };
  likes: number;
  comments: number;
  liked: boolean;
  image?: string;
}

const SocialFeed = () => {
  const [posts, setPosts] = useState<FeedPost[]>([
    {
      id: 1,
      user: {
        name: "Maria Santos",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      type: "run",
      timestamp: "2 horas atrás",
      content: "Manhã incrível correndo no Ibirapuera! 🏃‍♀️ Consegui bater meu PR nos 10K!",
      data: {
        distance: 10.5,
        time: "52:30",
        pace: "5:00",
        location: "Parque Ibirapuera, São Paulo"
      },
      likes: 24,
      comments: 8,
      liked: false,
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      user: {
        name: "Carlos Silva",
        avatar: "/api/placeholder/40/40",
        verified: false
      },
      type: "achievement",
      timestamp: "5 horas atrás",
      content: "Finalmente completei minha primeira meia maratona! 21K de pura superação! 🏅",
      data: {
        distance: 21.1,
        time: "1:45:20",
        pace: "4:58",
        achievement: "Primeira Meia Maratona"
      },
      likes: 67,
      comments: 15,
      liked: true
    },
    {
      id: 3,
      user: {
        name: "RunSP Eventos",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      type: "event",
      timestamp: "1 dia atrás",
      content: "🏁 Inscrições abertas para a Maratona de São Paulo 2024! Não percam essa oportunidade única!",
      data: {
        eventName: "Maratona de São Paulo 2024",
        location: "São Paulo, SP"
      },
      likes: 156,
      comments: 42,
      liked: false,
      image: "/api/placeholder/400/200"
    }
  ]);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const getPostIcon = (type: string) => {
    switch (type) {
      case "run":
        return <MapPin className="w-4 h-4 text-primary" />;
      case "achievement":
        return <Trophy className="w-4 h-4 text-yellow-500" />;
      case "event":
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <MapPin className="w-4 h-4 text-primary" />;
    }
  };

  const getPostBadge = (type: string) => {
    switch (type) {
      case "run":
        return <Badge variant="secondary">Atividade</Badge>;
      case "achievement":
        return <Badge className="bg-yellow-500 text-black">Conquista</Badge>;
      case "event":
        return <Badge className="bg-blue-500">Evento</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="card-glow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>{post.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">{post.user.name}</h3>
                    {post.user.verified && (
                      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>
                    )}
                    {getPostIcon(post.type)}
                  </div>
                  <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
              {getPostBadge(post.type)}
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>{post.content}</p>

            {/* Activity Data */}
            {post.data && (
              <div className="bg-muted/50 rounded-lg p-4">
                {post.type === "run" && (
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{post.data.distance}km</div>
                      <div className="text-xs text-muted-foreground">Distância</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{post.data.time}</div>
                      <div className="text-xs text-muted-foreground">Tempo</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{post.data.pace}/km</div>
                      <div className="text-xs text-muted-foreground">Pace</div>
                    </div>
                  </div>
                )}
                
                {post.type === "achievement" && (
                  <div className="text-center">
                    <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                    <div className="text-lg font-bold">{post.data.achievement}</div>
                    <div className="text-sm text-muted-foreground">
                      {post.data.distance}km em {post.data.time}
                    </div>
                  </div>
                )}

                {post.type === "event" && post.data.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{post.data.location}</span>
                  </div>
                )}
              </div>
            )}

            {/* Image */}
            {post.image && (
              <div className="rounded-lg overflow-hidden">
                <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center space-x-2 ${post.liked ? 'text-red-500' : ''}`}
                  onClick={() => handleLike(post.id)}
                >
                  <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                  <span>{post.likes}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </Button>
                
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SocialFeed;