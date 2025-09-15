import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Свяжитесь <span className="bg-gradient-to-r from-ai-purple to-ai-cyan bg-clip-text text-transparent">с нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы начать трансформацию вашего бизнеса? Свяжитесь с нами для бесплатной консультации 
            и обсуждения возможностей внедрения ИИ в ваши процессы.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-ai-purple hover:bg-ai-purple/90 text-white shadow-glow group"
                  >
                    Отправить сообщение
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="gradient-card border-border/50 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ai-purple to-ai-blue rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@bars-ai.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="gradient-card border-border/50 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ai-cyan to-ai-green rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Телефон (WhatsApp, Telegram)</h3>
                    <p className="text-muted-foreground">+79042174024</p>
                  </div>
                </div>
              </Card>

            </div>

            <Card className="gradient-card border-border/50 p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Готовы к консультации?</h3>
              <p className="text-muted-foreground mb-6">
                Запишитесь на бесплатную 30-минутную консультацию с нашими экспертами по ИИ.
              </p>
              <Button className="bg-ai-cyan hover:bg-ai-cyan/90 text-background font-semibold">
                Записаться на консультацию
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;