import { CardProps } from '@components/common/Cards'
import { SectionType4 } from '@components/Sections'

const cardData: CardProps[] = [
  {
    title: 'Application & System Integration',
    text: 'Seamlessly connect your business applications, on-premises systems, and cloud services. Streamline workflows, reduce manual processes, and unify operations across all platforms.',
  },
  {
    title: 'Data Synchronization.',
    text: 'Keep data consistent and up to date across multiple systems and clouds. Enable real-time syncing, automated updates, and centralized data management for faster, more reliable operations.',
  },
  {
    title: 'Data Security & Compliance.',
    text: 'Ensure secure data flow between applications while meeting industry-specific compliance standards. Protect sensitive information, improve auditability, and reduce integration-related risks.',
  },
  {
    title: 'Process Automation.',
    text: 'Automate repetitive tasks and workflows across systems. Free up resources, improve efficiency, and accelerate business processes through intelligent integration.',
  },
  {
    title: 'API Management & Connectivity.',
    text: 'Expose, manage, and scale APIs to enable secure communication between applications, services, and third-party systems. Ensure smooth data exchange and scalable integrations.',
  },
  {
    title: 'Scalable Integration Workflows.',
    text: 'Easily extend integrations as your business grows. Support temporary spikes, connect new services quickly, and maintain high performance across dynamic workloads.',
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
