import { http, HttpResponse } from "msw/http"
import { branches } from "./data/branches"

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
      type: "about:blank",
      title: "Conflicto",
      status: 409,
      detail: "Ya existe una sucursal con ese nombre",
    },
    { status: 409, headers: { "Content-Type": "application/problem+json" } },
    )
  }

  const created = {
    id: `br_${crypto.randomUUID().slice(0, 8)}`,
    name: body.name,
    location: body.location,
    status: "active" as const,
    createdAt: new Date().toISOString(),
    archivedAt: null,
    salesTodayCents: 0,
    activePromotions: 0,
  }
  branches.push(created)

  return HttpResponse.json(created, { status: 201 })
}),
]


