import { request } from "@/shared/api/client"
import { branchListSchema } from "./schemas"

export function fetchBranches() {
  return request("/api/branches", branchListSchema)
}