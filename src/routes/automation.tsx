import { createFileRoute } from '@tanstack/react-router'
import Automation from '../pages/Automation'

export const Route = createFileRoute('/automation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Automation />
}
