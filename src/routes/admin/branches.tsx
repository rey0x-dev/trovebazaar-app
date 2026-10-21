import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "@/shared/ui/page-header"
import { useBranches } from "@/features/branches/queries"
import { BranchCard } from "@/features/branches/branch-card"
import { BranchForm } from "@/features/branches/branch-form"

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
      <div className="grid items-start gap-6 lg:grid-cols-[1fr_20rem]">
        <div>
          {isPending && <p>Cargando…</p>}
          {error && <p className="text-destructive">{error.message}</p>}
          {data && (
          <ul className="grid gap-4 sm:grid-cols-2">
            {data.map((branch) => (
            <li key={branch.id}>
              <BranchCard branch={branch} />
            </li>
            ))}
          </ul>
          )}
      </div>
      <BranchForm />
    </div>
    </>
  )
}


