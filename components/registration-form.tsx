"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function RegistrationForm() {
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
      const response = await fetch("http://127.0.0.1:8000/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          surname: form.surname,
          email: form.email,
          phone: form.phone,
        }),
      })

      if (response.ok) {
        setMessage("Вы успешно записались на пробный урок!")
        setForm({ name: "", surname: "", email: "", phone: "" })
      } else {
        const data = await response.json()
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
    <div>
      <form
        className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Имя
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                id="name"
                placeholder="Иван"
                value={form.name}
                onChange={handleChange}
                required
                className={cn(
                  "pl-10 h-11",
                  "text-gray-900 placeholder:text-gray-500",
                  "bg-white border-gray-300",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "hover:border-gray-400 transition-colors",
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="surname" className="text-gray-700 font-medium">
              Фамилия
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                id="surname"
                placeholder="Иванов"
                value={form.surname}
                onChange={handleChange}
                required
                className={cn(
                  "pl-10 h-11",
                  "text-gray-900 placeholder:text-gray-500",
                  "bg-white border-gray-300",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "hover:border-gray-400 transition-colors",
                )}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Электронная почта
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              id="email"
              type="email"
              placeholder="ivan.ivanov@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className={cn(
                "pl-10 h-11",
                "text-gray-900 placeholder:text-gray-500",
                "bg-white border-gray-300",
                "focus:border-blue-500 focus:ring-blue-500",
                "hover:border-gray-400 transition-colors",
              )}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Номер телефона
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              value={form.phone}
              onChange={handleChange}
              required
              className={cn(
                "pl-10 h-11",
                "text-gray-900 placeholder:text-gray-500",
                "bg-white border-gray-300",
                "focus:border-blue-500 focus:ring-blue-500",
                "hover:border-gray-400 transition-colors",
              )}
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className={cn(
            "w-full bg-gradient-to-r from-blue-600 to-blue-500",
            "hover:from-blue-700 hover:to-blue-600",
            "text-white font-medium py-3 rounded-lg",
            "transition-all duration-300 shadow-md",
            "hover:shadow-lg transform hover:-translate-y-0.5",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
          )}
          disabled={loading}
        >
          {loading ? "Отправка..." : "Записаться на пробный урок"}
        </Button>

        {message && (
          <div
            className={cn(
              "text-center text-sm mt-4 p-3 rounded-lg",
              message.includes("успешно")
                ? "text-green-700 bg-green-50 border border-green-200"
                : "text-red-700 bg-red-50 border border-red-200",
            )}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
