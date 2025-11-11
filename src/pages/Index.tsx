import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: 'TrendingUp',
      title: 'Полное управление аккаунтом',
      description: 'Комплексное ведение вашего Instagram: от стратегии до реализации'
    },
    {
      icon: 'Calendar',
      title: 'Контент-план',
      description: 'Разработка уникального контент-плана с учетом вашей ниши и аудитории'
    },
    {
      icon: 'Image',
      title: 'Публикации',
      description: 'Создание и публикация качественного контента ежедневно'
    },
    {
      icon: 'Users',
      title: 'Привлечение аудитории',
      description: 'Органический рост подписчиков и вовлеченности'
    },
    {
      icon: 'BarChart',
      title: 'Аналитика',
      description: 'Детальная статистика и корректировка стратегии'
    },
    {
      icon: 'MessageCircle',
      title: 'Работа с комментариями',
      description: 'Модерация и ответы на комментарии и direct'
    }
  ];

  const plans = [
    {
      name: 'Старт',
      price: '15 000',
      period: 'месяц',
      features: [
        '10 постов в месяц',
        'Базовый контент-план',
        'Работа с комментариями',
        'Ежемесячная аналитика'
      ],
      popular: false
    },
    {
      name: 'Профи',
      price: '30 000',
      period: 'месяц',
      features: [
        '20 постов + 15 сторис',
        'Расширенный контент-план',
        'Таргетированная реклама',
        'Еженедельная аналитика',
        'Работа с direct'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '50 000',
      period: 'месяц',
      features: [
        'Безлимитные посты и сторис',
        'Индивидуальная стратегия',
        'Рекламные кампании',
        'Ежедневная аналитика',
        'Персональный менеджер',
        'Работа с блогерами'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      business: 'Владелица салона красоты',
      text: 'За 3 месяца работы подписчики выросли с 500 до 15 000! Заявки идут каждый день.',
      rating: 5
    },
    {
      name: 'Михаил Соколов',
      business: 'Фитнес-тренер',
      text: 'Профессиональный подход к контенту. Качество контента на высшем уровне!',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      business: 'Магазин одежды',
      text: 'Продажи через Instagram выросли в 4 раза. Команда работает слаженно и эффективно.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl instagram-gradient flex items-center justify-center">
              <Icon name="Instagram" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-gradient">InstaPromo</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition">Услуги</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition">Тарифы</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition">Отзывы</a>
            <a href="#contacts" className="text-foreground/80 hover:text-foreground transition">Контакты</a>
          </nav>
          <Button className="instagram-gradient text-white font-semibold">
            Начать сейчас
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 instagram-gradient-soft"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="instagram-gradient text-white border-0 px-4 py-1.5">
                🚀 Продвижение Instagram
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Превратим ваш Instagram в{' '}
                <span className="text-gradient">машину продаж</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Профессиональное продвижение бизнеса в Instagram. Увеличим охваты, 
                привлечем целевую аудиторию и настроим воронку продаж.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="instagram-gradient text-white font-semibold px-8">
                  Получить консультацию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  Наши кейсы
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">2.5M+</div>
                  <div className="text-sm text-muted-foreground">Привлечено подписчиков</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">95%</div>
                  <div className="text-sm text-muted-foreground">Остаются с нами</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/4d4680c8-3008-44ff-a4ee-aa7459938491/files/59c69427-7db4-4623-a5d7-c335d9b907ef.jpg" 
                  alt="Instagram Promotion" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 instagram-gradient rounded-3xl blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-3xl blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary">Наши услуги</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Полный спектр услуг <span className="text-gradient">для вашего роста</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              От контент-стратегии до таргетированной рекламы — всё для эффективного продвижения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl instagram-gradient-soft flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary">Тарифы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Выберите свой <span className="text-gradient">план продвижения</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Оплата только за результат.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-2'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="instagram-gradient text-white border-0 px-6 py-1.5">
                      🔥 Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-gradient">{plan.price} ₽</div>
                    <div className="text-muted-foreground">/ {plan.period}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'instagram-gradient text-white' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary">Отзывы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Что говорят наши <span className="text-gradient">клиенты</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.business}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <Badge variant="outline" className="text-primary border-primary">Контакты</Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                Готовы начать <span className="text-gradient">продвижение?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Оставьте заявку и получите бесплатный аудит вашего аккаунта
              </p>
            </div>
            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <Input 
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input 
                        type="email"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Расскажите о вашем бизнесе</label>
                    <Textarea 
                      placeholder="Чем занимается ваш бизнес и какие цели продвижения?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full instagram-gradient text-white font-semibold">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 text-center space-y-4">
              <p className="text-muted-foreground">Или свяжитесь с нами напрямую</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button variant="outline" size="lg" className="gap-2">
                  <Icon name="Instagram" size={20} />
                  @instapromo
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Icon name="Phone" size={20} />
                  +7 (999) 123-45-67
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Icon name="Mail" size={20} />
                  info@instapromo.ru
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl instagram-gradient flex items-center justify-center">
                <Icon name="Instagram" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">InstaPromo</span>
            </div>
            <p className="text-white/60">© 2024 InstaPromo. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
