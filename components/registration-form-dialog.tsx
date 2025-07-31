"use client"

import { useState } from "react"
import type React from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar, Mail, Phone, User } from "lucide-react"

interface RegistrationFormDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationFormDialog({ isOpen, onClose }: RegistrationFormDialogProps) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const cleanedPhone = form.phone.replace(/[\s()-]/g, "")

      const response = await fetch("http://127.0.0.1:8000/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          surname: form.surname,
          email: form.email,
          phone: cleanedPhone,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("Вы успешно записались!")
        setForm({ name: "", surname: "", email: "", phone: "" })
        setTimeout(() => {
          onClose()
          setMessage(null)
        }, 1500)
      } else {
        if (Array.isArray(data.detail)) {
          const messages = data.detail.map((err: any) => err.msg).join(", ")
          setMessage(messages)
        } else if (typeof data.detail === "string") {
          setMessage(data.detail)
        } else {
          setMessage("Произошла ошибка при отправке формы")
        }
      }
    } catch (error) {
      setMessage("Ошибка соединения с сервером")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] p-8 bg-white shadow-2xl rounded-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
        <DialogHeader className="text-center space-y-2 mb-6">
          <div className="flex justify-center mb-2">
            <Calendar className="h-10 w-10 text-blue-600" />
          </div>
          <DialogTitle className="text-3xl font-extrabold text-gray-900">Запишитесь на пробный урок</DialogTitle>
          <DialogDescription className="text-lg text-gray-600">
            Оставьте свои данные, и наш менеджер свяжется с вами в ближайшее время.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                placeholder="Иван"
                value={form.name}
                onChange={handleChange}
                className="pl-10 py-2 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="surname">Фамилия</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="surname"
                placeholder="Иванов"
                value={form.surname}
                onChange={handleChange}
                className="pl-10 py-2 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Электронная почта</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="ivan.ivanov@example.com"
                value={form.email}
                onChange={handleChange}
                className="pl-10 py-2 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                placeholder="+79991234567"
                value={form.phone}
                onChange={handleChange}
                className="pl-10 py-2 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                required
              />
            </div>
          </div>

          {message && (
            <div className="text-center text-sm text-green-600 mt-2">{message}</div>
          )}

          <DialogFooter className="mt-6">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {loading ? "Отправка..." : "Записаться"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
