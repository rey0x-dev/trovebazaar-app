import { http, HttpResponse } from "msw/http"
import { branches } from "./data/branches"


 export const handlers = [
  http.get("/api/branches", () => HttpResponse.json(branches)),
] 

 