import { request } from "@/shared/api/client"
import { branchListSchema, branchSchema } from "./schemas"
import type { CreateBranchInput } from "./schemas"

//GET BRANCHES
export function fetchBranches() {
  return request("/api/branches", branchListSchema)
}

//CREATE BRANCHES

export function createBranch(values: CreateBranchInput) {
  return request("/api/branches", branchSchema, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
}
