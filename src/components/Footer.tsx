import { Brain, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-ai-purple" />
              <span className="text-2xl font-bold bg-gradient-to-r from-ai-purple to-ai-cyan bg-clip-text text-transparent">
                Барс- Создание ИИ-ассистента для бизнеса
              </span>
            </div>
            <p className="text-muted-foreground">
              Создаем умных ИИ-ассистентов для автоматизации бизнес-процессов и повышения эффективности.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-ai-purple transition-smooth">Машинное обучение</a></li>
              <li><a href="#" className="hover:text-ai-purple transition-smooth">Чат-боты</a></li>
              <li><a href="#" className="hover:text-ai-purple transition-smooth">Анализ данных</a></li>
              <li><a href="#" className="hover:text-ai-purple transition-smooth">Автоматизация</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Компания</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-ai-purple transition-smooth">О нас</a></li>
              <li><a href="#" className="hover:text-ai-purple transition-smooth">Карьера</a></li>
              <li><a href="#" className="hover:text-ai-purple transition-smooth">Блог</a></li>
              <li><a href="#contact" className="hover:text-ai-purple transition-smooth">Контакты</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@bars-ai.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+79042174024 (WhatsApp, Telegram)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Барс- Создание ИИ-ассистента для бизнеса. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;