import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/promotions')({
  component: PromotionsPage,
})

function PromotionsPage() {
  return <h1 className='text-2x1 font-bold'>Promociones</h1>
}
