import { CardProps } from '@components/common/Cards'
import { SectionType4 } from '@components/Sections'

const cardData: CardProps[] = [
  {
    title: 'Workflow & Process Automation.',
    text: 'We automate manual, repetitive workflows across teams and systems, enabling faster execution, reduced errors, and consistent outcomes across your organization.',
  },
  {
    title: 'Infrastructure & DevOps Automation.',
    text: 'Automate cloud infrastructure provisioning, CI/CD pipelines, and environment management to improve deployment speed, reliability, and scalability.',
  },
  {
    title: 'Operational Automation & Optimization',
    text: 'Streamline day-to-day operations by automating monitoring, remediation, scaling, and resource management—reducing operational overhead and improving system performance.',
  },
  {
    title: 'Automation Governance & Reliability',
    text: 'Ensure automation is secure, compliant, and resilient. We implement guardrails, access controls, and observability to maintain trust and reliability across automated systems.',
  },
  {
    title: 'System Integration & Orchestration',
    text: 'We connect applications, platforms, and services through event-driven automation and orchestration—creating seamless, end-to-end automated workflows.',
  },
  {
    title: 'Automation Management & Continuous Improvement',
    text: 'We manage, monitor, and continuously improve automation systems to ensure they evolve with your business, scale reliably, and deliver long-term value.',
  },
]

export const OurServices = () => {
  return (
    <SectionType4
      heading={'Our Services'}
      cards={cardData}
      classNames={{
        cards: {
          title: 'w-[65%]',
        },
      }}
    />
  )
}
