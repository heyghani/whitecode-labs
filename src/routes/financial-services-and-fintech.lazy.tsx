import { createLazyFileRoute } from '@tanstack/react-router'
import FinancialServices from '../pages/FinancialServices'

export const Route = createLazyFileRoute('/financial-services-and-fintech')({
  component: () => <FinancialServices />,
})
