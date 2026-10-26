import { http, HttpResponse } from "msw/http"
import { branches } from "./data/branches"
import type { Branch } from "@/features/branches/schemas"
//cambia el texto a sin mayusculas ni acentos//
const normalize = (text: string) =>
  text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")


 export const handlers = [
  http.get("/api/branches", () => HttpResponse.json(branches)),


  http.post("/api/branches", async ({ request }) => {
  const body = (await request.json()) as { name: string; location: string }

  const duplicated = branches.some(
    (b) => normalize(b.name) === normalize(body.name),
  )
  if (duplicated) {
    return HttpResponse.json(
      {
        errorMessage: `Branch with name ${body.name} already exists`,
        errorTimestamp: new Date().toISOString(),
        errors: null,
        status: 400,
      },
      { status: 400 },
    )
  }

  const created: Branch = {
    branchId: Math.max(0, ...branches.map((b) => b.branchId)) + 1,
    name: body.name,
    status: "ACTIVO",
    location: body.location,
    creationDate: new Date().toISOString(),
    archivedAt: null,
  }
  branches.push(created)

  return HttpResponse.json(created, { status: 201 })
}),
]


