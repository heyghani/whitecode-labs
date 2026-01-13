import { createLazyFileRoute } from '@tanstack/react-router'
import RetailAndEcommerce from '../pages/RetailAndEcommerce'

export const Route = createLazyFileRoute('/retail-and-ecommerce')({
  component: () => <RetailAndEcommerce />,
})
