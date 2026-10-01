import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cars/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cars/"!</div>
}
