import { SectionType4 } from '@components/Sections'

const cardData = [
  {
    title: 'CI/CD automation',
    text: 'Design and implement continuous integration and continuous deployment pipelines that enable faster, repeatable, and low-risk releases across environments.',
  },
  {
    title: 'Infrastructure as Code (IaC)',
    text: 'Provision and manage infrastructure through code to ensure consistency, traceability, and rapid environment replication across cloud and on-prem systems.',
  },
  {
    title: 'Containerization & orchestration',
    text: 'Standardize application deployments using containers and orchestration platforms to improve portability, scalability, and operational efficiency',
  },
  {
    title: 'Monitoring, logging & observability',
    text: 'Gain real-time visibility into system performance and application health with centralized monitoring, logging, and alerting across environments.',
  },
  {
    title: 'DevSecOps & compliance',
    text: 'Embed security, access controls, and compliance checks directly into your delivery pipelines to reduce risk without slowing development.',
  },
  {
    title: 'Release & environment management',
    text: 'Manage multi-environment deployments with controlled rollouts, rollback strategies, and release governance to ensure stability and uptime.',
  },
]

export const OurServices = () => {
  return <SectionType4 heading={'Our Services'} cards={cardData} />
}
