import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Экспертов",
    color: "text-ai-purple"
  },
  {
    icon: Award,
    number: "3+",
    label: "Лет опыта",
    color: "text-ai-blue"
  },
  {
    icon: CheckCircle,
    number: "200+",
    label: "Проектов",
    color: "text-ai-cyan"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Поддержка",
    color: "text-ai-green"
  }
];

const benefits = [
  "Команда сертифицированных экспертов по ИИ",
  "Индивидуальный подход к каждому проекту",
  "Использование передовых технологий",
  "Полное сопровождение от идеи до внедрения",
  "Гарантия результата и поддержка",
  "Масштабируемые решения для любого бизнеса"
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                О <span className="bg-gradient-to-r from-ai-purple to-ai-cyan bg-clip-text text-transparent">нас</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Барс- Создание ИИ-ассистента для бизнеса — это команда опытных разработчиков и специалистов по искусственному интеллекту, 
                которые помогают бизнесу использовать силу ИИ для достижения выдающихся результатов.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Почему выбирают нас:</h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-ai-green flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="gradient-card border-border/50 text-center group hover:shadow-card transition-smooth">
                  <CardContent className="p-6">
                    <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-smooth`} />
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="gradient-card border-border/50 p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сделать технологии искусственного интеллекта доступными для каждого бизнеса, 
                  помогая компаниям автоматизировать процессы, увеличивать прибыль и создавать 
                  инновационные продукты будущего.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;