'use server'

import { prisma } from "@/lib/prisma";
import { z } from 'zod';

const appointmentSchema = z.object({
  tutorName: z.string(),
  petName: z.string(),
  phone: z.string(),
  description: z.string(),
  scheduleAt: z.date()
})

type AppointmentData = z.infer<typeof appointmentSchema>

export async function createAppointment(data: AppointmentData) {
  try {
    const parsedData = appointmentSchema.parse(data)

    const { scheduleAt } = parsedData
    const hour = scheduleAt.getHours()

    const isMorning = hour >= 9 && hour < 12
    const isAfternoon = hour >= 13 && hour < 18
    const isEvening = hour >= 19 && hour < 21

    if (!isMorning && !isAfternoon && !isEvening) {
      return {
        ok: false,
        message: 'Agendamentos só podem ser feitos entre 9h e 12h, 13h e 18h, ou 19h e 21h.'
      }
    }

    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        scheduleAt: parsedData.scheduleAt
      }
    })

    if (existingAppointment) {
      return {
        ok: false,
        message: 'Já existe um agendamento para esse horário.'
      }
    }

    await prisma.appointment.create({
      data: parsedData
    })

    return {
      ok: true,
      message: 'Agendamento criado com sucesso!'
    }
  } catch (error) {
    console.error(error)
  }
} 