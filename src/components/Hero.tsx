import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-brain.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-ai-purple/10 border border-ai-purple/20 rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-ai-purple" />
                <span className="text-sm text-ai-purple font-medium">Революция в бизнесе с ИИ</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Создание
                <span className="block bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
                  ИИ-ассистента
                </span>
                для бизнеса
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Разрабатываем умных ИИ-ассистентов, которые автоматизируют процессы, 
                улучшают клиентский сервис и повышают эффективность вашего бизнеса.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-ai-purple hover:bg-ai-purple/90 text-white shadow-glow group"
              >
                Начать бесплатно
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-ai-cyan text-ai-cyan hover:bg-ai-cyan hover:text-background"
              >
                Смотреть демо
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-purple">500+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-cyan">95%</div>
                <div className="text-sm text-muted-foreground">Удовлетворенность</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-green">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/20 to-ai-cyan/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
            <img
              src={heroImage}
              alt="AI Technology"
              className="relative rounded-3xl shadow-card animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;