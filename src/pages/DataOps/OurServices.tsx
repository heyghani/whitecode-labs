import { SectionType4 } from '@components/Sections'

const cardData = [
  {
    title: 'Data pipeline automation',
    text: 'Design and implement automated, end-to-end data pipelines that enable faster, reliable ingestion, transformation, and delivery across systems and platforms.',
  },
  {
    title: 'Data quality & validation',
    text: 'Embed automated data quality checks, validation rules, and anomaly detection to ensure accuracy, consistency, and trust in enterprise data.',
  },
  {
    title: 'Data orchestration & workflow management',
    text: 'Coordinate complex data workflows with orchestration frameworks to improve reliability, traceability, and operational control across environments.',
  },
  {
    title: 'Data observability & monitoring',
    text: 'Gain real-time visibility into data freshness, volume, schema changes, and pipeline health with centralized monitoring and alerting.',
  },
  {
    title: 'Data governance & compliance',
    text: 'Implement access controls, lineage tracking, and policy enforcement to meet security, privacy, and regulatory requirements without slowing data teams.',
  },
  {
    title: 'Analytics & platform enablement',
    text: 'Enable analytics, BI, and AI platforms with production-ready data foundations that scale reliably across cloud and hybrid environments.',
  },
]

export const OurServices = () => {
  return <SectionType4 heading={'Our Services'} cards={cardData} />
}
