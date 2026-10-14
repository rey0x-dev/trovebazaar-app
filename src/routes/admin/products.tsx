import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/products')({
  component: ProductsPage,
})

function ProductsPage() {
  return <h1 className='text-2x1 font-bold'>Productos</h1>
}
