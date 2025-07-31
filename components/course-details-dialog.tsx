import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Course } from "@/lib/courses"
import Image from "next/image"
import { Clock, Users, Star, Calendar } from "lucide-react"

interface CourseDetailsDialogProps {
  course: Course | null
  isOpen: boolean
  onClose: () => void
}

export function CourseDetailsDialog({ course, isOpen, onClose }: CourseDetailsDialogProps) {
  if (!course) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <DialogHeader className="px-6 pt-4">
          <DialogTitle className="text-3xl font-bold">{course.title}</DialogTitle>
          <DialogDescription className="text-lg text-gray-600">{course.description}</DialogDescription>
        </DialogHeader>
        <div className="px-6 py-4 space-y-4">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>{course.students}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{course.rating}</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Что вы изучите:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {course.details.map((detail, index) => (
                <li
                  key={index}
                  className=""
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <span className="text-3xl font-bold text-gray-900">{course.price}</span>
              {course.oldPrice && <span className="text-lg text-gray-500 line-through ml-2">{course.oldPrice}</span>}
            </div>
          </div>
        </div>
        <DialogFooter className="px-6 pb-6 pt-4 border-t">
          <Button
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            <Calendar className="mr-2 h-5 w-5" />
            {course.button}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
