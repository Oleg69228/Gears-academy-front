export interface Teacher {
  id: string
  name: string
  title: string
  description: string
  image: string
  skills: string[]
}

export const teachersData: Teacher[] = [
  {
    id: "anna-petrova",
    name: "Анна Петрова",
    title: "Senior Frontend Developer",
    description: "8 лет в Яндексе, ментор 500+ разработчиков",
    image: "/placeholder.svg?height=100&width=100&text=Анна Петрова",
    skills: ["React", "TypeScript", "JavaScript"],
  },
  {
    id: "mikhail-ivanov",
    name: "Михаил Иванов",
    title: "Lead Data Scientist",
    description: "10 лет в Сбербанке, PhD в области ML",
    image: "/placeholder.svg?height=100&width=100&text=Михаил Иванов",
    skills: ["Python", "ML", "Data Science"],
  },
  {
    id: "elena-smirnova",
    name: "Елена Смирнова",
    title: "Head of Design",
    description: "6 лет в Mail.ru, автор 50+ интерфейсов",
    image: "/placeholder.svg?height=100&width=100&text=Елена Смирнова",
    skills: ["Figma", "UX/UI", "Product Design"],
  },
  {
    id: "dmitry-kozlov",
    name: "Дмитрий Козлов",
    title: "Senior Backend Developer",
    description: "12 лет в VK, архитектор highload систем",
    image: "/placeholder.svg?height=100&width=100&text=Дмитрий Козлов",
    skills: ["Node.js", "Go", "Databases"],
  },
  {
    id: "olga-sokolova",
    name: "Ольга Соколова",
    title: "Mobile Developer (iOS)",
    description: "7 лет в Тинькофф, эксперт по Swift и SwiftUI",
    image: "/placeholder.svg?height=100&width=100&text=Ольга Соколова",
    skills: ["Swift", "iOS", "Mobile Dev"],
  },
  {
    id: "igor-novikov",
    name: "Игорь Новиков",
    title: "DevOps Engineer",
    description: "9 лет в СберМаркете, автоматизация инфраструктуры",
    image: "/placeholder.svg?height=100&width=100&text=Игорь Новиков",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "natalia-morozova",
    name: "Наталья Морозова",
    title: "Product Manager",
    description: "5 лет в Ozon, запуск успешных IT-продуктов",
    image: "/placeholder.svg?height=100&width=100&text=Наталья Морозова",
    skills: ["Product Management", "Agile", "Analytics"],
  },
  {
    id: "sergey-volkov",
    name: "Сергей Волков",
    title: "Cybersecurity Expert",
    description: "15 лет в Касперском, защита от киберугроз",
    image: "/placeholder.svg?height=100&width=100&text=Сергей Волков",
    skills: ["Cybersecurity", "Network Security", "Penetration Testing"],
  },
]
