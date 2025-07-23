
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

interface FooterProps {
  scrollToTop: () => void;
}

const Footer = ({ scrollToTop }: FooterProps) => {
  return (
    <footer className="bg-gradient-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Bora Correr</h3>
            <p className="text-gray-300 mb-4">
              A plataforma completa para organizadores e atletas de corrida.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/eventos" className="hover:text-white transition-colors">Eventos</a></li>
              <li><a href="/inscricoes" className="hover:text-white transition-colors">Inscrições</a></li>
              <li><a href="/comunidades" className="hover:text-white transition-colors">Comunidades</a></li>
              <li><a href="/organizador/login" className="hover:text-white transition-colors">Área do Organizador</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>São Paulo, SP</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contato@boracorrer.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>VOLTAR AO INÍCIO</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Bora Correr. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
