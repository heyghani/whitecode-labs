import { createLazyFileRoute } from '@tanstack/react-router'
import CleverSparrow from '../pages/CleverSparrow'

export const Route = createLazyFileRoute('/clever-sparrow')({
  component: CleverSparrow,
})
