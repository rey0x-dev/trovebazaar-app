import { createFileRoute } from "@tanstack/react-router"
import { useBranches } from "@/features/branches/queries"
import { PageHeader } from "@/shared/ui/page-header"

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
        <ul className="mt-4 space-y-1">
          {data.map((branch) => (
            <li key={branch.id}>
              {branch.name} — {branch.domain}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}