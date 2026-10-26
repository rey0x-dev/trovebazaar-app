
import { z } from "zod"

export const branchSchema = z.object({
  branchId: z.number().int(),
  name: z.string(),
  status: z.enum(["ACTIVO", "ARCHIVADO"]),
  location: z.string(),
  creationDate: z.iso.datetime({ offset: true }).nullable(),
  archivedAt: z.iso.datetime({ offset: true }).nullable(),
})

export const branchListSchema = z.array(branchSchema)
export type Branch = z.infer<typeof branchSchema>

// Esquema de los datos que enviamos al crear una sucursal
export const createBranchSchema = z.object({
  name: z
    .string()
    .trim()
    .min(5, "Escribe al menos 5 caracteres")
    .max(60, "El nombre no puede superar los 60 caracteres"),

  location: z
    .string()
    .trim()
    .min(2, "Escribe al menos 2 caracteres")
    .max(60, "La ubicación no puede superar los 60 caracteres"),
})

export type CreateBranchInput = z.infer<typeof createBranchSchema>