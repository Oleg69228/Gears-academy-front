export interface Course {
  id: string
  title: string
  description: string
  image: string
  badge?: { text: string; color: string }
  duration: string
  rating: number
  students: string
  price: string
  oldPrice?: string
  details: string[] // Подробная информация для модального окна
  button: string
  hours: string
}

export const coursesData: Course[] = [
  {
    id: "mini-web-dev",
    title: "Мини-курс по веб-разработке",
    description:
      "Изучение основ HTML, CSS и JavaScript для структурирования веб-страниц. Создание и верстка сайтов. Практика + деплой проекта. Быстрый старт для новичков. Первые результаты уже через 2 недели обучения!",
    image: "/placeholder.svg?height=200&width=400&text=Мини-курс по веб-разработке",
    
    duration: "8 занятий",
    rating: 4.9,
    students: "57",
    price: "БЕСПЛАТНО",
    oldPrice: "₽12,900",
    details: [
      "Изучение основ HTML для структурирования веб-страниц.",
      "Освоение CSS для стилизации и адаптивной верстки (Flexbox, Grid).",
      "Введение в JavaScript: переменные, функции, DOM-манипуляции.",
      "Создание простого интерактивного веб-сайта с нуля.",
      "Развертывание вашего первого проекта в интернете.",
      "Практические задания и обратная связь от ментора.",
    ],
    button: "Пройти курс",
    hours: "9"
},
{
    id: "backend-dev",
    title: "Backend-разработка",
    description:
    "Разработка на Node.js/Python/Go, работа с базами (PostgreSQL, MongoDB), создание API (REST, GraphQL), аутентификация, кеширование, микросервисы, DevOps-настройки (Docker, CI/CD) и деплой в облако. Реальные проекты в портфолио.",
    image: "/placeholder.svg?height=200&width=400&text=Backend-разработка",
    badge: { text: "Хит продаж", color: "bg-green-600" },
    duration: "10 месяцев",
    rating: 4.8,
    students: "42",
    price: "₽99,900",
    oldPrice: "₽149,900",
    details: [
        "Выбор языка: Node.js, Python или Go (на выбор студента).",
        "Работа с реляционными (PostgreSQL) и нереляционными (MongoDB) базами данных.",
        "Проектирование и разработка RESTful и GraphQL API.",
        "Реализация систем аутентификации и авторизации (JWT, OAuth).",
        "Оптимизация производительности: кеширование, балансировка нагрузки.",
        "Введение в микросервисную архитектуру.",
        "Основы DevOps: Docker, CI/CD пайплайны.",
        "Развертывание приложений в облачных сервисах (AWS, Google Cloud, Vercel).",
        "Создание 3-4 полноценных бэкенд-проектов для портфолио.",
    ],
    button: "Записаться на пробный урок",
    hours: "200+"
  },
  {
    id: "frontend-dev",
    title: "Frontend-разработка",
    description:
      "Глубокое погружение в JavaScript (ES6+), React/Vue, продвинутая вёрстка (CSS/SCSS, анимации), работа с API, state-менеджмент (Redux/Vuex), TypeScript, оптимизация и тестирование. Создание SPA и сложных интерфейсов с нуля.",
    image: "/placeholder.svg?height=200&width=400&text=Frontend-разработка",
    badge: { text: "Новый", color: "bg-blue-600" },
    duration: "8 месяцев",
    rating: 4.9,
    students: "56",
    price: "₽79,900",
    oldPrice: "₽119,900",
    details: [
      "Продвинутый JavaScript: замыкания, прототипы, асинхронность, ES6+.",
      "Выбор фреймворка: React.js или Vue.js (на выбор студента).",
      "Продвинутая верстка: CSS-модули, SCSS, CSS-in-JS, сложные анимации.",
      "Интеграция с RESTful и GraphQL API.",
      "Управление состоянием приложения: Redux, Vuex, Context API, Zustand.",
      "Использование TypeScript для создания надежного и масштабируемого кода.",
      "Оптимизация производительности фронтенд-приложений.",
      "Тестирование: Unit, Integration, E2E тесты.",
      "Разработка 4-5 сложных одностраничных приложений (SPA) и интерактивных интерфейсов.",
    ],
    button: "Записаться на пробный урок",
    hours: "200+"
  },
  {
    id: "mobile-dev",
    title: "Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum debitis saepe deserunt mollitia vel consequatur, aliquid consequuntur, architecto quidem enim veritatis. Eveniet magni magnam cumque optio aspernatur rerum fuga!",
    image: "/placeholder.svg?height=200&width=400&text=Мобильная разработка",
    duration: "- месяцев",
    rating: 4.7,
    students: "-",
    price: "₽0",
    oldPrice: "0",
    hours: "-",
    button: "Записаться на пробный урок",
    details: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
  },
  {
    id: "devops-engineer",
    title: "Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum debitis saepe deserunt mollitia vel consequatur, aliquid consequuntur, architecto quidem enim veritatis. Eveniet magni magnam cumque optio aspernatur rerum fuga!",
    image: "/placeholder.svg?height=200&width=400&text=Мобильная разработка",
    duration: "- месяцев",
    rating: 4.7,
    students: "-",
    price: "₽0",
    oldPrice: "0",
    hours: "-",
    button: "Записаться на пробный урок",
    details: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
  },
  {
    id: "qa-engineer",
    title: "Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum debitis saepe deserunt mollitia vel consequatur, aliquid consequuntur, architecto quidem enim veritatis. Eveniet magni magnam cumque optio aspernatur rerum fuga!",
    image: "/placeholder.svg?height=200&width=400&text=Мобильная разработка",
    duration: "- месяцев",
    rating: 4.7,
    students: "-",
    price: "₽0",
    oldPrice: "0",
    hours: "-",
    button: "Записаться на пробный урок",
    details: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
  },
  {
    id: "product-manager",
    title: "Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum debitis saepe deserunt mollitia vel consequatur, aliquid consequuntur, architecto quidem enim veritatis. Eveniet magni magnam cumque optio aspernatur rerum fuga!",
    image: "/placeholder.svg?height=200&width=400&text=Мобильная разработка",
    duration: "- месяцев",
    rating: 4.7,
    students: "-",
    price: "₽0",
    oldPrice: "0",
    hours: "-",
    button: "Записаться на пробный урок",
    details: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
  },
  {
    id: "cybersecurity",
    title: "Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum debitis saepe deserunt mollitia vel consequatur, aliquid consequuntur, architecto quidem enim veritatis. Eveniet magni magnam cumque optio aspernatur rerum fuga!",
    image: "/placeholder.svg?height=200&width=400&text=Мобильная разработка",
    duration: "- месяцев",
    rating: 4.7,
    students: "-",
    price: "₽0",
    oldPrice: "0",
    hours: "-",
    button: "Записаться на пробный урок",
    details: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
  },
  {
    id: "blockchain-dev",
    title: "Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum debitis saepe deserunt mollitia vel consequatur, aliquid consequuntur, architecto quidem enim veritatis. Eveniet magni magnam cumque optio aspernatur rerum fuga!",
    image: "/placeholder.svg?height=200&width=400&text=Мобильная разработка",
    duration: "- месяцев",
    rating: 4.7,
    students: "-",
    price: "₽0",
    oldPrice: "0",
    hours: "-",
    button: "Записаться на пробный урок",
    details: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
  },
]
