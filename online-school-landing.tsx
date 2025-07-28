import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  MonitorPlay,
  Users,
  Award,
  Clock,
  Star,
  CheckCircle,
  Play,
  Globe,
  Smartphone,
  Headphones,
  TrendingUp,
  MessageCircle,
  Calendar,
  Download,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <MonitorPlay className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">EduPro</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#courses" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Курсы
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              О школе
            </Link>
            <Link href="#teachers" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Преподаватели
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Отзывы
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Войти
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">🎓 Более 10,000 выпускников</Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                    Освойте новую профессию <span className="text-blue-600">онлайн</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-[600px]">
                    Практические курсы от ведущих экспертов индустрии. Получите востребованные навыки и найдите работу
                    мечты за 6-12 месяцев.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                    <Play className="mr-2 h-5 w-5" />
                    Начать обучение
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Бесплатный урок
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">Рейтинг</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Трудоустройство</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Поддержка</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Студент изучает онлайн курс"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Урок завершен</div>
                      <div className="text-xs text-gray-500">JavaScript основы</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">1,247 студентов</div>
                      <div className="text-xs text-gray-500">изучают сейчас</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Курсов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Трудоустройство</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9</div>
                <div className="text-gray-600">Средний рейтинг</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" id="about">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему выбирают нашу школу</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Мы создали идеальную среду для онлайн-обучения с персональным подходом к каждому студенту
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Обучение в любое время</CardTitle>
                  <CardDescription>
                    Изучайте материал в удобном темпе, доступ к урокам 24/7 с любого устройства
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Персональный ментор</CardTitle>
                  <CardDescription>
                    Индивидуальное сопровождение опытного наставника на протяжении всего курса
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Сертификат</CardTitle>
                  <CardDescription>
                    Получите официальный сертификат о прохождении курса для вашего портфолио
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Карьерная поддержка</CardTitle>
                  <CardDescription>
                    Помощь в составлении резюме, подготовке к собеседованиям и поиске работы
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Мобильное приложение</CardTitle>
                  <CardDescription>
                    Учитесь где угодно с нашим удобным мобильным приложением для iOS и Android
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Headphones className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>Техподдержка 24/7</CardTitle>
                  <CardDescription>
                    Круглосуточная поддержка по всем техническим вопросам и помощь в обучении
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-gray-50" id="courses">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Популярные курсы</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Выберите направление и начните путь к новой профессии уже сегодня
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Веб-разработка"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">Хит продаж</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">12 месяцев</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">4.9</span>
                    </div>
                  </div>
                  <CardTitle>Веб-разработчик</CardTitle>
                  <CardDescription>
                    Изучите HTML, CSS, JavaScript, React и Node.js. Создайте 5 проектов для портфолио.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      200+ часов практики
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      2,847 студентов
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <span className="text-2xl font-bold">₽89,900</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₽129,900</span>
                      </div>
                      <Button>Подробнее</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Data Science" fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600">Новый</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">10 месяцев</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <CardTitle>Data Scientist</CardTitle>
                  <CardDescription>
                    Python, машинное обучение, анализ данных. Работа с реальными датасетами компаний.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      180+ часов практики
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      1,234 студентов
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <span className="text-2xl font-bold">₽99,900</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₽149,900</span>
                      </div>
                      <Button>Подробнее</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="UX/UI Дизайн" fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">8 месяцев</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">4.9</span>
                    </div>
                  </div>
                  <CardTitle>UX/UI Дизайнер</CardTitle>
                  <CardDescription>
                    Figma, принципы дизайна, исследования пользователей. Создание интерфейсов с нуля.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      150+ часов практики
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      3,156 студентов
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <span className="text-2xl font-bold">₽79,900</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₽119,900</span>
                      </div>
                      <Button>Подробнее</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Посмотреть все курсы
              </Button>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="py-20" id="teachers">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши преподаватели</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Эксперты из ведущих IT-компаний с многолетним опытом практической работы
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Анна Петрова"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">Анна Петрова</CardTitle>
                  <CardDescription>Senior Frontend Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">8 лет в Яндексе, ментор 500+ разработчиков</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      TypeScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Михаил Иванов"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">Михаил Иванов</CardTitle>
                  <CardDescription>Lead Data Scientist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">10 лет в Сбербанке, PhD в области ML</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      ML
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Елена Смирнова"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">Елена Смирнова</CardTitle>
                  <CardDescription>Head of Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">6 лет в Mail.ru, автор 50+ интерфейсов</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Figma
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      UX
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Дмитрий Козлов"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">Дмитрий Козлов</CardTitle>
                  <CardDescription>Senior Backend Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">12 лет в VK, архитектор highload систем</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Go
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gray-50" id="reviews">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы наших студентов</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Более 10,000 выпускников уже изменили свою жизнь благодаря нашим курсам
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Мария"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Мария К.</CardTitle>
                      <CardDescription>Frontend Developer в Тинькофф</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Прошла курс веб-разработки и через 3 месяца после выпуска получила оффер в Тинькофф. Преподаватели
                    объясняют сложные вещи простым языком, а проекты в портфолио реально помогли на собеседованиях."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Алексей"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Алексей Н.</CardTitle>
                      <CardDescription>Data Scientist в Сбербанке</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Сменил профессию с экономиста на дата-сайентиста. Курс очень практический, много работы с реальными
                    данными. Ментор помог разобраться со сложными алгоритмами."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Анастасия"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Анастасия В.</CardTitle>
                      <CardDescription>UX/UI Designer в Ozon</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Курс UX/UI дизайна превзошел все ожидания. Научилась работать в Figma, проводить исследования
                    пользователей. Портфолио получилось настолько сильным, что меня взяли в Ozon сразу после курса."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Читать все отзывы
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ответы на самые популярные вопросы о наших курсах и обучении
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Подходят ли курсы для новичков без опыта?</AccordionTrigger>
                  <AccordionContent>
                    Да, наши курсы разработаны специально для людей без опыта в IT. Мы начинаем с самых основ и
                    постепенно переходим к более сложным темам. Каждый студент получает персонального ментора для
                    индивидуальной поддержки.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Сколько времени нужно уделять обучению?</AccordionTrigger>
                  <AccordionContent>
                    Рекомендуем заниматься 10-15 часов в неделю для эффективного освоения материала. Вы можете учиться в
                    своем темпе - все материалы доступны 24/7. Средняя продолжительность курсов составляет 6-12 месяцев.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Гарантируете ли вы трудоустройство?</AccordionTrigger>
                  <AccordionContent>
                    Мы предоставляем полную карьерную поддержку: помощь в составлении резюме, подготовка к
                    собеседованиям, рекомендации работодателям. 95% наших выпускников находят работу в течение 6 месяцев
                    после окончания курса.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Можно ли получить возврат денег?</AccordionTrigger>
                  <AccordionContent>
                    Да, у нас есть гарантия возврата денег в течение первых 14 дней обучения, если курс вам не подошел.
                    Также предусмотрена рассрочка на 12 месяцев без переплат.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Какой документ я получу после окончания?</AccordionTrigger>
                  <AccordionContent>
                    После успешного завершения курса вы получите сертификат о профессиональной переподготовке
                    установленного образца, который признается работодателями. Также вы получите портфолио из реальных
                    проектов.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать свой путь в IT?</h2>
              <p className="text-xl mb-8 opacity-90">
                Запишитесь на бесплатную консультацию и узнайте, какой курс подходит именно вам. Наши эксперты помогут
                составить индивидуальный план обучения.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Бесплатная консультация</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Персональный план обучения</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Доступ к пробному уроку</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input placeholder="Ваш email" className="bg-white text-gray-900 border-0" />
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Calendar className="mr-2 h-5 w-5" />
                  Записаться
                </Button>
              </div>

              <p className="text-sm opacity-75 mt-4">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <Link href="#" className="underline">
                  политикой конфиденциальности
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16" id="contact">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduPro</span>
              </div>
              <p className="text-gray-400 mb-6">
                Онлайн школа для изучения востребованных IT-профессий. Практические курсы от экспертов индустрии.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Globe className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Веб-разработка
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    UX/UI Дизайн
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Python разработка
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    DevOps
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Преподаватели
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Отзывы
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Блог
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Карьера
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Помощь
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Условия использования
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} EduPro. Все права защищены.</p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Скачать приложение:</span>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Download className="h-4 w-4 mr-2" />
                  iOS
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
