import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "@/shared/ui/page-header"
import { useBranches } from "@/features/branches/queries"
import { BranchCard } from "@/features/branches/branch-card"

export const Route = createFileRoute("/admin/branches")({
  component: BranchesPage,
})

function BranchesPage() {
  const { data, isPending, error } = useBranches()

  return (
    <>
      <PageHeader
        title="Sucursales"
        description="Cada sucursal es un dominio. El vendedor no elige sucursal: se toma del dominio con el que abre la app."
      />
      {isPending && <p>Cargando…</p>}
      {error && <p className="text-destructive">{error.message}</p>}
      {data && (
        <ul className="grid gap-4 sm:grid-cols-2">
          {data.map((branch) => (
      <BranchCard key={branch.id} branch={branch} />
    ))}
        </ul>
      )}
      
    </>
  )
}