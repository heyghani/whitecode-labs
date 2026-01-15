import { createLazyFileRoute } from '@tanstack/react-router'
import VelocityAnalytics from '../pages/VelocityAnalytics'

export const Route = createLazyFileRoute('/velocity-analytics')({
  component: VelocityAnalytics,
})
