import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/sales')({
  component: SalesPage,
})

function SalesPage() {
  return <h1 className='text-2x1 font-bold'>Ventas</h1>
}
