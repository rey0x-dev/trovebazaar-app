import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/branches')({
  component: BranchesPage,
})

function BranchesPage() {
  return <h1 className='text-2x1 font-bold'>Sucursales</h1>
}
