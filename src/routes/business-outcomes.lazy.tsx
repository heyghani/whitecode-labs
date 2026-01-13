import { createLazyFileRoute } from '@tanstack/react-router'
import BusinessOutcomes from '../pages/BusinessOutcomes'

export const Route = createLazyFileRoute('/business-outcomes')({
  component: () => <BusinessOutcomes />,
})
