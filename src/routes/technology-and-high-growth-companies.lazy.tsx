import { createLazyFileRoute } from '@tanstack/react-router'
import TechnologyAndHighGrowthCompanies from '../pages/TechnologyAndHighGrowthCompanies'

export const Route = createLazyFileRoute(
  '/technology-and-high-growth-companies'
)({
  component: () => <TechnologyAndHighGrowthCompanies />,
})
