import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Course } from "@/lib/courses"
import Image from "next/image"
import { Clock, Users, Star, Calendar, BookOpen } from "lucide-react"

interface CourseDetailsDialogProps {
  course: Course | null
  isOpen: boolean
  onClose: () => void
}

export function CourseDetailsDialog({ course, isOpen, onClose }: CourseDetailsDialogProps) {
  if (!course) return null

  const isFree = course.price === "БЕСПЛАТНО"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`p-0 overflow-hidden max-h-[90vh] max-w-2xl transition-all duration-500 ${
          isFree
            ? "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-300 ring-2 ring-green-200 ring-opacity-50"
            : "bg-white"
        }`}
      >
        <div className="flex flex-col max-h-[90vh]">
          {/* Header Image */}
          <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Free Badge */}
            {isFree && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                🎉 БЕСПЛАТНО
              </div>
            )}

            {/* Rating Badge */}
            <div
              className={`absolute top-4 right-4 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 ${
                isFree ? "bg-green-500/90 text-white" : "bg-white/90"
              }`}
            >
              <Star
                className={`h-4 w-4 ${isFree ? "fill-yellow-300 text-yellow-300" : "fill-yellow-400 text-yellow-400"}`}
              />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <DialogHeader className="px-6 pt-6 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">
                  {course.duration}
                </Badge>
                {isFree && (
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 text-xs font-bold shadow-md">
                    ⚡ Быстрый старт
                  </Badge>
                )}
              </div>
              <DialogTitle
                className={`text-2xl md:text-3xl font-bold transition-colors duration-300 leading-tight ${
                  isFree ? "text-green-800" : "text-gray-900"
                }`}
              >
                {course.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600 leading-relaxed">
                {course.description}
              </DialogDescription>
            </DialogHeader>

            <div className="px-6 py-4 space-y-6">
              {/* Course Stats */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className={`h-4 w-4 mr-2 ${isFree ? "text-green-500" : "text-blue-500"}`} />
                  <span>{course.hours} часов практики</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className={`h-4 w-4 mr-2 ${isFree ? "text-green-500" : "text-green-500"}`} />
                  <span>{course.students} студентов</span>
                </div>
                
              </div>

              {/* Course Details */}
              <div className="space-y-3">
                <h3 className={`text-xl font-semibold ${isFree ? "text-green-800" : "text-gray-900"}`}>
                  Что вы изучите:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {course.details.map((detail, index) => (
                    <li key={index} className="leading-relaxed" style={{ animationDelay: `${300 + index * 100}ms` }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Section */}
              {/* <div className={`p-4 rounded-lg ${isFree ? "bg-green-100 border border-green-200" : "bg-gray-50"}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-3xl font-bold ${isFree ? "text-green-800" : "text-gray-900"}`}>
                      {course.price}
                    </span>
                    {course.oldPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{course.oldPrice}</span>
                    )}
                  </div>
                  {isFree && (
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-medium">Экономия 100%</div>
                      <div className="text-xs text-green-500">Ограниченное время</div>
                    </div>
                  )}
                </div>
              </div> */}
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="px-6 pb-6 pt-4 border-t flex-shrink-0">
            <Button
              size="lg"
              className={`w-full transition-all duration-300 hover:scale-105 ${
                isFree
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl text-white font-bold"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              }`}
            >
              <Calendar className="mr-2 h-5 w-5" />
              {isFree ? "Начать бесплатно" : course.button}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
