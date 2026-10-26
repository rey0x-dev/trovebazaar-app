import {useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import { createBranch, fetchBranches } from "./api"
import type { CreateBranchInput } from "./schemas"

export function useBranches() {
  return useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  })
}

export function useCreateBranch() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (values: CreateBranchInput) => createBranch(values),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["branches"],
      })
    },
  })
}
