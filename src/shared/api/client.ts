//pide la URL, y si el servidor responde con error lo convierte en un ApiError con el detail
import { z } from "zod"

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = "ApiError"
    this.status = status
  }
}

type ProblemDetails = { 
  title?: string
  detail?: number
  errorMessage?: string 
}

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
    const message = problem?.errorMessage  ?? problem?.title ?? `Error ${res.status}`
    throw new ApiError(res.status, message)
  }
  const parsed = schema.safeParse(await res.json())
  if (!parsed.success) {
    console.error(`Respuesta inesperada de ${path}:\n${z.prettifyError(parsed.error)}`)
    throw new ApiError(502, "La respuesta del servidor no tiene el formato esperado")
  }
  return parsed.data
}