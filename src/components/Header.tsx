import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-ai-purple" />
            <span className="text-2xl font-bold bg-gradient-to-r from-ai-purple to-ai-cyan bg-clip-text text-transparent">
              Барс- Создание ИИ-ассистента для бизнеса
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-ai-purple transition-smooth">
              Главная
            </a>
            <a href="#services" className="text-foreground hover:text-ai-purple transition-smooth">
              Услуги
            </a>
            <a href="#about" className="text-foreground hover:text-ai-purple transition-smooth">
              О нас
            </a>
            <a href="#contact" className="text-foreground hover:text-ai-purple transition-smooth">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white">
              Войти
            </Button>
            <Button className="bg-ai-purple hover:bg-ai-purple/90 text-white shadow-glow">
              Начать
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-foreground hover:text-ai-purple transition-smooth">
                Главная
              </a>
              <a href="#services" className="text-foreground hover:text-ai-purple transition-smooth">
                Услуги
              </a>
              <a href="#about" className="text-foreground hover:text-ai-purple transition-smooth">
                О нас
              </a>
              <a href="#contact" className="text-foreground hover:text-ai-purple transition-smooth">
                Контакты
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white">
                  Войти
                </Button>
                <Button className="bg-ai-purple hover:bg-ai-purple/90 text-white">
                  Начать
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;