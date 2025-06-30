"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, useFormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


const schema = z.object({
  name: z.string().min(2, { message: "Requerido" }),
  phone: z.string().min(7, { message: "Requerido" }),
  email: z.string().email("Introduce un email válido").min(1, { message: "Requerido" }),
  note: z.string().optional(),
})

type ContactFormValues = z.infer<typeof schema>

// Mensaje de error en español
function FormMessageEs() {
  const { error, formMessageId } = useFormField();
  if (!error?.message) return null;
  return (
    <p id={formMessageId} className="text-sm font-medium text-destructive">
      {error.message === "Required" ? "Requerido" : error.message}
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle")
  const [message, setMessage] = useState("")

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  })

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading")
    setMessage("")
    try {
      const res = await fetch("https://alred.es/n8n/webhook/formulario_web", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error("Error al enviar el formulario: " + errorText);
      }
      setStatus("success")
      setMessage("¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.")
      form.reset()
    } catch (err: any) {
      setStatus("error")
      setMessage("Hubo un problema al enviar el formulario: " + (err.message || ""));
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-gray-900/80 border border-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-md mt-20">
      <h3 className="text-2xl font-bold mb-6 text-white text-center">Contáctanos</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre y Apellido</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ej: Juan Pérez"
                    className="bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:bg-white/20 transition"
                    {...field}
                  />
                </FormControl>
                <FormMessageEs />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ej: +34 600 123 456"
                    className="bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:bg-white/20 transition"
                    {...field}
                  />
                </FormControl>
                <FormMessageEs />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ej: correo@ejemplo.com"
                    type="email"
                    className="bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:bg-white/20 transition"
                    {...field}
                  />
                </FormControl>
                <FormMessageEs />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nota (opcional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="¿En qué podemos ayudarte?"
                    className="bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:bg-white/20 transition"
                    {...field}
                  />
                </FormControl>
                <FormMessageEs />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-[#e60023] hover:bg-[#c5001e] text-white font-semibold text-lg py-2 rounded-lg shadow-lg hover:shadow-[#e60023]/30 transition-all"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </Button>
          {status === "success" && (
            <div className="text-green-500 text-center font-medium mt-2">{message}</div>
          )}
          {status === "error" && (
            <div className="text-red-500 text-center font-medium mt-2">{message}</div>
          )}
        </form>
      </Form>
    </div>
  )
}