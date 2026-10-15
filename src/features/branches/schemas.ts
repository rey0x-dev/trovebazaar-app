
import { z } from "zod"

export const branchSchema = z.object({
  id: z.string(),
  name: z.string(),
  domain: z.string(),

  status: z.enum(["active", "archived"]),

  createdAt: z.iso.datetime({ offset: true }),

  archivedAt: z.iso.datetime({ offset: true }).nullable(),

  salesTodayCents: z.number().int().nullable(),

  activePromotions: z.number().int().nonnegative().nullable(),
})

export const branchListSchema = z.array(branchSchema)
export type Branch = z.infer<typeof branchSchema>