import { createLazyFileRoute } from '@tanstack/react-router'
import DataOps from '../pages/DataOps'

export const Route = createLazyFileRoute('/data-ops')({
  component: DataOps,
})
