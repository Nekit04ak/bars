import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, Database, Zap, Shield, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Машинное обучение",
    description: "Разработка и внедрение моделей машинного обучения для прогнозирования и анализа данных.",
    gradient: "from-ai-purple to-ai-blue"
  },
  {
    icon: Bot,
    title: "Чат-боты и виртуальные ассистенты",
    description: "Создание интеллектуальных чат-ботов для автоматизации клиентского сервиса.",
    gradient: "from-ai-blue to-ai-cyan"
  },
  {
    icon: Database,
    title: "Анализ больших данных",
    description: "Обработка и анализ больших объемов данных для получения бизнес-инсайтов.",
    gradient: "from-ai-cyan to-ai-green"
  },
  {
    icon: Zap,
    title: "Автоматизация процессов",
    description: "Автоматизация рутинных задач и оптимизация бизнес-процессов с помощью ИИ.",
    gradient: "from-ai-green to-ai-purple"
  },
  {
    icon: Shield,
    title: "ИИ-безопасность",
    description: "Защита систем от киберугроз с использованием технологий искусственного интеллекта.",
    gradient: "from-ai-purple to-ai-cyan"
  },
  {
    icon: TrendingUp,
    title: "Прогнозная аналитика",
    description: "Предсказание трендов и будущих событий на основе исторических данных.",
    gradient: "from-ai-cyan to-ai-blue"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Наши <span className="bg-gradient-to-r from-ai-purple to-ai-cyan bg-clip-text text-transparent">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем полный спектр решений на основе искусственного интеллекта 
            для трансформации вашего бизнеса и достижения конкурентных преимуществ.
          </p>
          <div className="mt-8 p-6 bg-gradient-to-r from-ai-purple/10 to-ai-cyan/10 rounded-lg border border-ai-purple/20">
            <p className="text-lg font-semibold text-center">
              <span className="bg-gradient-to-r from-ai-purple to-ai-cyan bg-clip-text text-transparent">
                Стоимость услуг от 3000 ₽
              </span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:shadow-card transition-smooth group"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;