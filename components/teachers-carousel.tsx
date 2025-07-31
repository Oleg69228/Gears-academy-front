"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Teacher } from "@/lib/teachers"
import { cn } from "@/lib/utils"

interface TeachersCarouselProps {
  teachers: Teacher[]
}

export function TeachersCarousel({ teachers }: TeachersCarouselProps) {
  const autoplayOptions = React.useRef({
    delay: 5000, // Задержка в 5 секунд
    stopOnInteraction: true, // Останавливать при взаимодействии пользователя
    stopOnMouseEnter: true, // Останавливать при наведении мыши
  })

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay(autoplayOptions.current)])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const resetAutoplay = React.useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay
      if (autoplay) {
        autoplay.reset()
      }
    }
  }, [emblaApi])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      resetAutoplay()
    }
  }, [emblaApi, resetAutoplay])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      resetAutoplay()
    }
  }, [emblaApi, resetAutoplay])

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index)
        resetAutoplay()
      }
    },
    [emblaApi, resetAutoplay],
  )

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("pointerDown", resetAutoplay)
    emblaApi.on("settle", resetAutoplay)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
      emblaApi.off("pointerDown", resetAutoplay)
      emblaApi.off("settle", resetAutoplay)
    }
  }, [emblaApi, onSelect, resetAutoplay])

  return (
    <div className="relative px-8">
      {/* Левый градиентный оверлей */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden py-4" ref={emblaRef}>
        <div className="flex -mx-2">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
              <Card className="text-center border shadow-md rounded-xl h-full flex flex-col p-6 bg-white transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={teacher.image || "/placeholder.svg"}
                      alt={teacher.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{teacher.name}</CardTitle>
                  <CardDescription>{teacher.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-sm text-gray-600 mb-4">{teacher.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {teacher.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Правый градиентный оверлей */}
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <Button
        variant="default"
        size="icon"
        onClick={scrollPrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 z-20 rounded-full h-12 w-12 shadow-md bg-blue-600 hover:bg-blue-700 text-white hidden sm:flex"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="default"
        size="icon"
        onClick={scrollNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 z-20 rounded-full h-12 w-12 shadow-md bg-blue-600 hover:bg-blue-700 text-white hidden sm:flex"
      >
        <ArrowRight className="h-5 w-5" />
      </Button>
      <div className="flex justify-center mt-8 space-x-2">
        {emblaApi &&
          Array.from(emblaApi.scrollSnapList()).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-200",
                index === selectedIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400",
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
      </div>
    </div>
  )
}
