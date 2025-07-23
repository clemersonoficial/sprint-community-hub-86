import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Zap
} from "lucide-react";

const Footer = () => {
  const navigation = {
    plataforma: [
      { name: "Como Funciona", href: "#" },
      { name: "Para Atletas", href: "#" },
      { name: "Para Organizadores", href: "#" },
      { name: "Preços", href: "#" }
    ],
    suporte: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Contato", href: "#" },
      { name: "Status do Sistema", href: "#" },
      { name: "API Docs", href: "#" }
    ],
    legal: [
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
      { name: "Política de Cancelamento", href: "#" },
      { name: "LGPD", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 text-center border-b border-border">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Fique por dentro das <span className="gradient-text">novidades</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Receba dicas de treino, novos eventos e atualizações da plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-card border-border"
              />
              <Button className="btn-primary">
                <Mail className="w-4 h-4 mr-2" />
                INSCREVER
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold">
                  <span className="gradient-text">BORA</span>
                  <span className="text-foreground ml-1">CORRER</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-sm">
                A plataforma completa para atletas e organizadores de corrida. 
                Conecte-se, compete e conquiste seus objetivos.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contato@boracorrer.com.br</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Plataforma</h4>
              <ul className="space-y-3">
                {navigation.plataforma.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6">Suporte</h4>
              <ul className="space-y-3">
                {navigation.suporte.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6">Legal</h4>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Bora Correr. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">
                Feito com ❤️ para a comunidade de corredores
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Sistema Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;