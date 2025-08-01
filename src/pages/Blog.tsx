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
      title: "Plataforma Bora Correr Atinge Marca de 50 Mil Usuários Cadastrados",
      excerpt: "A plataforma de corridas mais popular do Brasil celebra um novo marco com crescimento exponencial de usuários ativos.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=300&fit=crop",
      category: "Notícias",
      author: "Equipe Bora Correr",
      date: "2024-03-15",
      readTime: "3 min",
      views: 2250,
      likes: 189,
      content: `
        <h2>Crescimento Exponencial da Comunidade</h2>
        <p>A plataforma Bora Correr atingiu uma marca histórica ao alcançar 50 mil usuários cadastrados, consolidando-se como a principal ferramenta de gestão de corridas do Brasil. Este crescimento representa um aumento de 300% em relação ao mesmo período do ano anterior.</p>
        
        <h3>Números que Impressionam</h3>
        <p>Desde o lançamento, a plataforma já organizou mais de 1.200 eventos, conectando organizadores e atletas de todo o país. Os dados mostram que 89% dos usuários recomendam a plataforma para outros corredores.</p>
        
        <h3>Novidades em Desenvolvimento</h3>
        <p>Para celebrar este marco, a equipe Bora Correr anunciou o desenvolvimento de novas funcionalidades, incluindo integração com smartwatches de última geração e um sistema de gamificação para incentivar ainda mais a prática esportiva.</p>
        
        <p>"Estamos muito orgulhosos deste crescimento e do impacto positivo que estamos causando na comunidade da corrida brasileira", comenta Jefferson Lopes, especialista em marketing digital da empresa.</p>
      `
    },
    {
      id: 2,
      title: "Nova Funcionalidade: Análise de Performance com IA Chega ao App",
      excerpt: "Inteligência artificial agora analisa seus treinos e oferece recomendações personalizadas para melhorar sua performance.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=300&fit=crop",
      category: "Tecnologia",
      author: "Jorge Henrique",
      date: "2024-03-12",
      readTime: "5 min",
      views: 1800,
      likes: 142,
      content: `
        <h2>Revolução na Análise de Desempenho</h2>
        <p>A mais nova atualização da plataforma Bora Correr traz uma funcionalidade revolucionária: análise de performance baseada em inteligência artificial. Esta ferramenta analisa padrões de treino e oferece insights personalizados para cada atleta.</p>
        
        <h3>Como Funciona</h3>
        <p>O sistema coleta dados de treinos, frequência cardíaca, tempo de recuperação e histórico de corridas para criar um perfil único de cada corredor. Com base nessas informações, a IA sugere planos de treino, períodos de descanso e estratégias de corrida.</p>
        
        <h3>Benefícios Comprovados</h3>
        <p>Nos testes beta, 78% dos usuários relataram melhoria significativa em seus tempos de corrida após seguir as recomendações da IA por 30 dias.</p>
      `
    },
    {
      id: 3,
      title: "Parceria com Strava Facilita Sincronização de Dados para Atletas",
      excerpt: "Nova integração permite que corredores sincronizem automaticamente seus treinos e participem de desafios globais.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop",
      category: "Parcerias",
      author: "Guimel Andrade",
      date: "2024-03-10",
      readTime: "4 min",
      views: 1650,
      likes: 98,
      content: `
        <h2>Integração Total com Strava</h2>
        <p>A parceria estratégica entre Bora Correr e Strava representa um marco importante para a comunidade de corredores brasileiros. Agora, todos os treinos registrados no Strava são automaticamente sincronizados com a plataforma Bora Correr.</p>
        
        <h3>Vantagens da Integração</h3>
        <p>Os usuários podem participar de desafios globais, comparar performance com corredores internacionais e ter acesso a estatísticas avançadas de treino, tudo de forma integrada e automática.</p>
        
        <h3>Segurança de Dados</h3>
        <p>A integração segue os mais altos padrões de segurança e privacidade, garantindo que os dados dos usuários permaneçam protegidos e sejam utilizados apenas para melhorar a experiência de corrida.</p>
      `
    },
    {
      id: 4,
      title: "Evento Nacional 'Mega Corrida Brasil' Reunirá 10 Mil Participantes",
      excerpt: "O maior evento de corrida do país acontecerá simultaneamente em 15 cidades, com gestão 100% pela plataforma Bora Correr.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=300&fit=crop",
      category: "Eventos",
      author: "Clemerson Lopes",
      date: "2024-03-08",
      readTime: "6 min",
      views: 3200,
      likes: 267,
      content: `
        <h2>O Maior Evento de Corrida do Brasil</h2>
        <p>A 'Mega Corrida Brasil' promete ser o evento mais grandioso já organizado através da plataforma Bora Correr. Com participação simultânea em 15 cidades brasileiras, o evento espera reunir mais de 10 mil corredores.</p>
        
        <h3>Tecnologia de Ponta na Organização</h3>
        <p>Todo o evento será gerenciado através da plataforma, desde as inscrições até a emissão de certificados. Um sistema de cronometragem sincronizada garantirá que todos os participantes, independente da cidade, tenham a mesma experiência.</p>
        
        <h3>Impacto Social</h3>
        <p>Parte da renda do evento será destinada a projetos sociais que promovem o esporte em comunidades carentes, demonstrando o compromisso da plataforma com o impacto social positivo.</p>
      `
    },
    {
      id: 5,
      title: "Sistema de Certificação Digital Revoluciona Comprovação de Participação",
      excerpt: "Blockchain e NFTs agora garantem autenticidade e rastreabilidade de todos os certificados emitidos pela plataforma.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop",
      category: "Inovação",
      author: "Equipe Técnica",
      date: "2024-03-05",
      readTime: "4 min",
      views: 1420,
      likes: 89,
      content: `
        <h2>Certificação Digital do Futuro</h2>
        <p>A implementação de tecnologia blockchain para certificação de participação em corridas representa um avanço significativo na validação de conquistas esportivas. Cada certificado é único e impossível de ser falsificado.</p>
        
        <h3>Benefícios da Nova Tecnologia</h3>
        <p>Os certificados digitais podem ser verificados instantaneamente por qualquer pessoa ou instituição, eliminando fraudes e proporcionando credibilidade total às conquistas dos atletas.</p>
        
        <h3>Sustentabilidade</h3>
        <p>A digitalização dos certificados também contribui para a sustentabilidade, eliminando a necessidade de impressão em papel e reduzindo significativamente o impacto ambiental dos eventos.</p>
      `
    },
    {
      id: 6,
      title: "Programa de Mentoria Conecta Corredores Experientes com Iniciantes",
      excerpt: "Nova funcionalidade social da plataforma cria conexões entre atletas para compartilhamento de experiências e conhecimento.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=300&fit=crop",
      category: "Comunidade",
      author: "Ana Paula Silva",
      date: "2024-03-03",
      readTime: "5 min",
      views: 1180,
      likes: 156,
      content: `
        <h2>Fortalecendo a Comunidade de Corredores</h2>
        <p>O novo programa de mentoria da Bora Correr conecta corredores experientes com iniciantes, criando uma rede de apoio e conhecimento que beneficia toda a comunidade.</p>
        
        <h3>Como Funciona o Programa</h3>
        <p>Mentores voluntários são pareados com novos corredores baseado em localização, objetivos e disponibilidade. As interações acontecem através de chat integrado, videochamadas e encontros presenciais para treinos.</p>
        
        <h3>Impacto na Retenção</h3>
        <p>Estudos preliminares mostram que corredores que participam do programa de mentoria têm 85% mais chances de continuar correndo após 6 meses, demonstrando o poder da comunidade no esporte.</p>
      `
    }
  ];

  const categories = ["Todos", "Notícias", "Tecnologia", "Parcerias", "Eventos", "Inovação", "Comunidade"];

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
              <span className="text-primary">NOTÍCIAS</span>
              <span className="text-foreground"> BORA CORRER</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Fique por dentro das últimas novidades, atualizações e eventos da plataforma
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
            <h2 className="text-3xl font-bold text-primary mb-4">Notícia em Destaque</h2>
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
                
                <Button size="lg" onClick={() => window.location.href = `/blog/${blogPosts[0].id}`}>Ler Notícia Completa</Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Últimas Notícias</h2>
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
                    <Button size="sm" onClick={() => window.location.href = `/blog/${post.id}`}>Ler Mais</Button>
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