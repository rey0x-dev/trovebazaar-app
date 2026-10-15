//pide la URL, y si el servidor responde con error lo convierte en un ApiError con el detail
import type { z } from "zod"

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = "ApiError"
    this.status = status
  }
}

type ProblemDetails = { title?: string; status?: number; detail?: string }

async function readProblem(res: Response): Promise<ProblemDetails | null> {
  try {
    return (await res.json()) as ProblemDetails
  } catch {
    return null // el cuerpo del error no era JSON
  }
}

export async function request<S extends z.ZodType>(
  path: string,
  schema: S,
  init?: RequestInit,
): Promise<z.infer<S>> {
  const res = await fetch(path, init)

  if (!res.ok) {
    const problem = await readProblem(res)
    const message = problem?.detail ?? problem?.title ?? `Error ${res.status}`
    throw new ApiError(res.status, message)
  }

  return schema.parse(await res.json())
}