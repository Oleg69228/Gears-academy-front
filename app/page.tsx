"use client"

import type React from "react"

import { useState } from "react"
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
  Brain,
  Headphones,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CourseDetailsDialog } from "@/components/course-details-dialog"
import { RegistrationFormDialog } from "@/components/registration-form-dialog" // Import the new component
import { coursesData, type Course } from "@/lib/courses"
import { teachersData } from "@/lib/teachers" // Import teachers data
import { TeachersCarousel } from "@/components/teachers-carousel" // Import the new carousel component
import { ExclusiveSection } from "@/components/exclusive-section"
import { RegistrationForm } from "@/components/registration-form"
const scrollToСourses = (e: React.MouseEvent) => {
  e.preventDefault()
  const coursesSection = document.getElementById("courses")
  if (coursesSection) {
    coursesSection.scrollIntoView({ behavior: "smooth" })
  }
}

const scrollToAbout = (e: React.MouseEvent) => {
  e.preventDefault()
  const aboutSection = document.getElementById("about")
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" })
  }
}

const scrollToTeachers = (e: React.MouseEvent) => {
  e.preventDefault()
  const teachersSection = document.getElementById("teachers")
  if (teachersSection) {
    teachersSection.scrollIntoView({ behavior: "smooth" })
  }
}

const scrollToReviews = (e: React.MouseEvent) => {
  e.preventDefault()
  const reviewsSection = document.getElementById("reviews")
  if (reviewsSection) {
    reviewsSection.scrollIntoView({ behavior: "smooth" })
  }
}

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault()
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

export default function OnlineSchoolLanding() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false)
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false) // New state for registration modal
  const [showAllCourses, setShowAllCourses] = useState(false)

  
  const handleOpenCourseModal = (course: Course) => {
    setSelectedCourse(course)
    setIsCourseModalOpen(true)
  }

  const handleCloseCourseModal = () => {
    setIsCourseModalOpen(false)
    setSelectedCourse(null)
  }

  const handleOpenRegistrationModal = () => {
    setIsRegistrationModalOpen(true)
  }

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false)
  }

  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-5 w-45 items-center justify-center rounded-lg ">
              <Link href={"#"}>
                <Image
                  src="/Logo.svg?height=20&width=187&text=Логотип GearsAcademy"
                  alt="Логотип GearsAcademy"
                  width={187}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              onClick={scrollToСourses}
              href="#courses"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Курсы
            </Link>
            <Link
              onClick={scrollToAbout}
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              О школе
            </Link>
            <Link
              onClick={scrollToTeachers}
              href="#teachers"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Преподаватели
            </Link>
            <Link
              onClick={scrollToReviews}
              href="#reviews"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Отзывы
            </Link>
            <Link
              onClick={scrollToContact}
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={handleOpenRegistrationModal}>
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
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">🎓 Более 100 выпускников</Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                    Первая <span className="text-blue-600">IT</span>
                    <br />
                    онлайн-школа с использованием <span className="text-blue-600">ИИ</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-[600px]">
                    Практические курсы от ведущих экспертов индустрии. Получите востребованные навыки и найдите работу
                    мечты за 6-12 месяцев.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
                    onClick={handleOpenRegistrationModal}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Записаться на урок
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
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Поддержка</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Студент изучает онлайн курс"
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
                      <div className="text-sm font-medium">36 студентов</div>
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Учеников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Курсов</div>
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
                  <CardTitle>Индивидуальное обучение</CardTitle>
                  <CardDescription>
                    Персональный подход, гибкий график и программа под ваш запрос. Освойте материал с поддержкой
                    эксперта.
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
                    <MonitorPlay className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Вебинары каждую неделю</CardTitle>
                  <CardDescription>
                    Прямые эфиры с практиками и разбором кейсов. Участвуйте, обсуждайте и прокачивайте навыки в режиме
                    онлайн.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Курсы от лидеров сферы</CardTitle>
                  <CardDescription>
                    Только актуальные методики и кейсы от тех, кто уже добился успеха в вашей нише. Никакой теории «из
                    учебников» — только рабочие инструменты!
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
        <ExclusiveSection/>
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
          {coursesData.slice(0, showAllCourses ? coursesData.length : 3).map((course, index) => (
            <Card
              key={course.id}
              className={`overflow-hidden transition-all duration-500 group ${
                course.price === "БЕСПЛАТНО"
                  ? "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-300 hover:border-green-400 hover:shadow-2xl hover:-translate-y-3 ring-2 ring-green-200 ring-opacity-50"
                  : "hover:shadow-xl hover:-translate-y-2"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {course.badge && (
                  <Badge
                    className={`absolute top-4 left-4 ${course.badge.color} text-white`}
                    style={{ animationDelay: `${index * 200 + 300}ms` }}
                  >
                    {course.badge.text}
                  </Badge>
                )}
                {course.price === "БЕСПЛАТНО" && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                    🎉 БЕСПЛАТНО
                  </div>
                )}
                <div
                  className={`absolute top-4 right-4 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 ${
                    course.price === "БЕСПЛАТНО" ? "bg-green-500/90 text-white" : "bg-white/90"
                  }`}
                >
                  <Star
                    className={`h-4 w-4 ${course.price === "БЕСПЛАТНО" ? "fill-yellow-300 text-yellow-300" : "fill-yellow-400 text-yellow-400"}`}
                  />
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {course.duration}
                  </Badge>
                  {course.price === "БЕСПЛАТНО" && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 text-xs font-bold shadow-md">
                      ⚡ Быстрый старт
                    </Badge>
                  )}
                </div>
                <CardTitle
                  className={`transition-colors duration-300 leading-tight ${
                    course.price === "БЕСПЛАТНО"
                      ? "text-green-800 group-hover:text-green-600"
                      : "group-hover:text-blue-600"
                  }`}
                >
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock
                      className={`h-4 w-4 mr-2 ${course.price === "БЕСПЛАТНО" ? "text-green-500" : "text-blue-500"}`}
                    />
                    <span>{course.hours} часов практики</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users
                      className={`h-4 w-4 mr-2 ${course.price === "БЕСПЛАТНО" ? "text-green-500" : "text-green-500"}`}
                    />
                    <span>{course.students} студентов</span>
                  </div>
                  
                </div>
                <Button
                  onClick={() => handleOpenCourseModal(course)}
                  className={`w-full transition-all duration-300 hover:scale-105 ${
                    course.price === "БЕСПЛАТНО"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl text-white font-bold"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  }`}
                  size="lg"
                >
                  {course.price === "БЕСПЛАТНО" ? "🚀 Начать бесплатно" : course.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="transition-all duration-300 hover:scale-105 bg-transparent border-2 hover:bg-blue-50 hover:border-blue-300"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Скрыть" : "Посмотреть все курсы"}
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

            {/* Integrate the TeachersCarousel here */}
            <TeachersCarousel teachers={teachersData} />
          </div>
        </section>
        {/* Reviews Section */}
        <section className="py-20 bg-gray-50" id="reviews">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы наших студентов</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Более 100 выпускников уже изменили свою жизнь благодаря нашим курсам
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=50&width=50&text=Мария"
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
                    {
                      '"Прошла курс веб-разработки и через 3 месяца после выпуска получила оффер в Тинькофф. Преподаватели объясняют сложные вещи простым языком, а проекты в портфолио реально помогли на собеседованиях."'
                    }
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=50&width=50&text=Алексей"
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
                    {
                      '"Сменил профессию с экономиста на дата-сайентиста. Курс очень практический, много работы с реальными данными. Ментор помог разобраться со сложными алгоритмами."'
                    }
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=50&width=50&text=Анастасия"
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
                    {
                      '"Курс UX/UI дизайна превзошел все ожидания. Научилась работать в Figma, проводить исследования пользователей. Портфолио получилось настолько сильным, что меня взяли в Ozon сразу после курса."'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button 
              variant="outline" 
              size="lg"
              className="transition-all duration-300 hover:scale-105 bg-transparent border-2 hover:bg-blue-50 hover:border-blue-300"
              >
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
                  <span>Подбор программы обучения</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Доступ к пробному уроку</span>
                </div>
              </div>
              <div className="text-start">
                
                <RegistrationForm/>
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
                <Image
                  src="/Logo2.svg?height=20&width=187&text=Логотип GearsAcademy"
                  alt="Логотип GearsAcademy"
                  width={187}
                  height={20}
                />
              </div>
              <p className="text-gray-400 mb-6">
                Онлайн школа для изучения востребованных IT-профессий. Практические курсы от экспертов индустрии.
              </p>
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
              <h3 className="font-semibold mb-4">О школе</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Информация
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Вакансии
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Частые вопросы
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    VK
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Telegram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} GearsAcademy Все права защищены.</p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">gears.academy@yandex.ru</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CourseDetailsDialog course={selectedCourse} isOpen={isCourseModalOpen} onClose={handleCloseCourseModal} />
      <RegistrationFormDialog isOpen={isRegistrationModalOpen} onClose={handleCloseRegistrationModal} />
    </div>
  )
}
