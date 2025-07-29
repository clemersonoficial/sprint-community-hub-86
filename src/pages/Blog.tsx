import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Dicas Essenciais para Melhorar Sua Performance na Corrida",
      excerpt: "Descubra as estratégias mais eficazes para aumentar sua velocidade e resistência nas corridas.",
      image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&h=300&fit=crop",
      category: "Treino",
      author: "Dr. Carlos Mendes",
      date: "2024-03-15",
      readTime: "5 min",
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: "Como se Preparar para sua Primeira Maratona",
      excerpt: "Um guia completo para iniciantes que desejam completar os 42 quilômetros com sucesso.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=300&fit=crop",
      category: "Iniciantes",
      author: "Ana Paula Silva",
      date: "2024-03-12",
      readTime: "8 min",
      views: 2100,
      likes: 156
    },
    {
      id: 3,
      title: "Alimentação Pré e Pós Corrida: O que Você Precisa Saber",
      excerpt: "Nutrição adequada pode ser o diferencial entre uma boa e uma excelente performance.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=300&fit=crop",
      category: "Nutrição",
      author: "Dra. Marina Costa",
      date: "2024-03-10",
      readTime: "6 min",
      views: 890,
      likes: 67
    },
    {
      id: 4,
      title: "Tecnologia e Corrida: Os Melhores Aplicativos para Corredores",
      excerpt: "Conheça as ferramentas digitais que podem revolucionar seus treinos e competições.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=300&fit=crop",
      category: "Tecnologia",
      author: "João Pedro Santos",
      date: "2024-03-08",
      readTime: "4 min",
      views: 1560,
      likes: 112
    },
    {
      id: 5,
      title: "Prevenção de Lesões: Exercícios de Fortalecimento para Corredores",
      excerpt: "Mantenha-se correndo por mais tempo com estes exercícios essenciais de prevenção.",
      image: "https://images.unsplash.com/photo-1571019613540-996a420b6e0e?w=600&h=300&fit=crop",
      category: "Saúde",
      author: "Fisioterapeuta Lucas Ferreira",
      date: "2024-03-05",
      readTime: "7 min",
      views: 1780,
      likes: 134
    },
    {
      id: 6,
      title: "Corridas em Grupo vs Solo: Prós e Contras de Cada Modalidade",
      excerpt: "Descubra qual estilo de corrida se adapta melhor ao seu perfil e objetivos.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=300&fit=crop",
      category: "Lifestyle",
      author: "Camila Rodrigues",
      date: "2024-03-03",
      readTime: "5 min",
      views: 920,
      likes: 75
    }
  ];

  const categories = ["Todos", "Treino", "Iniciantes", "Nutrição", "Tecnologia", "Saúde", "Lifestyle"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="text-primary">BLOG</span>
              <span className="text-foreground"> BORA CORRER</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Dicas, treinos, nutrição e tudo sobre o mundo da corrida
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Artigo em Destaque</h2>
          </div>
          
          <Card className="card-glow overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <Badge className="absolute top-4 left-4">
                  {blogPosts[0].category}
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <CardTitle className="text-2xl mb-4">{blogPosts[0].title}</CardTitle>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {blogPosts[0].views}
                  </div>
                </div>
                
                <Button size="lg">Ler Artigo Completo</Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Últimos Artigos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="card-glow hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </div>
                    </div>
                    <Button size="sm">Ler Mais</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default Blog;