import { createFileRoute } from '@tanstack/react-router'
import IntegrationAsAService from '../pages/IntegrationService'

export const Route = createFileRoute('/integration-as-a-service')({
  component: RouteComponent,
})

function RouteComponent() {
  return <IntegrationAsAService />
}
