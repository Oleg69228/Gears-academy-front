import { Video, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExclusiveSection() {
  const courses = [
    { title: "Веб-разработка", lessons: 15, rating: 4.9 },
    { title: "Дизайн", lessons: 12, rating: 4.8 },
    { title: "Маркетинг", lessons: 18, rating: 4.9 },
    { title: "Аналитика", lessons: 10, rating: 4.7 },
  ]

  return (
    <section className="w-full max-w-[1352px] min-h-[280px] sm:min-h-[320px] lg:h-[354px] mx-auto bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl lg:rounded-2xl overflow-hidden relative mt-4 sm:mt-6 lg:mt-8">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-white/5 rounded-full blur-lg"></div>
      </div>

      <div className="relative h-full flex flex-col lg:flex-row items-center gap-6 lg:gap-0 p-4 sm:p-6 lg:px-16 lg:py-8">
        {/* Left content */}
        <div className="flex-1 text-white text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-white/30">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            Эксклюзивно
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Только у нас</h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8">
            Бесплатные видео-уроки от экспертов
          </p>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg group w-full sm:w-auto"
          >
            Посмотреть
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Course previews */}
        <div className="flex-1 w-full lg:w-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/30 hover:bg-white/25 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Video className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                  <span className="text-white font-medium text-xs sm:text-sm truncate">{course.title}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span className="truncate">{course.lessons} уроков</span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ExclusiveSectionVariant2() {
  return <ExclusiveSection />
}
