import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/')({
  component: IndexPage,
})

function IndexPage() {
  return <h1 className='text-2x1 font-bold'>Dashboard</h1>
}
