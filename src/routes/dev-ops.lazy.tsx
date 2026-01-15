import { createLazyFileRoute } from '@tanstack/react-router'
import Devops from '../pages/DevOps'

export const Route = createLazyFileRoute('/dev-ops')({
  component: Devops,
})
