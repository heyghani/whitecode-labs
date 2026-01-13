import { SectionType2 } from '@components/Sections'
import img1 from '@images/Business/section-2.png'

const BusinessOutcomesSection2 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Business Outcomes Section'}
      heading={'DisasterVault™'}
      rtl
      text={
        <>
          <p className='mb-2'>
            DisasterVault™ by White Code Labs delivers enterprise-grade disaster
            recovery in just 3 days—without the cost of a full SRE team. With
            cross-region backups, real-time corruption detection, automated
            failover, and 1-click point-in-time restores in under 60 seconds,
            DisasterVault™ protects PostgreSQL and MySQL databases from outages
            that destroy customer trust and revenue. Automated restore testing,
            Slack alerts, and simple runbooks ensure your recovery plan actually
            works when it matters.
          </p>
          <p>
            Battle-tested through Fortune 500 ransomware recoveries and priced
            for early-stage teams, DisasterVault™ gives startups the same
            resilience as enterprises—without the overhead. Built for lean teams
            who can’t afford downtime or data loss, it safeguards your customer
            trust, revenue, and runway. Because your data isn’t just
            infrastructure—it is your company.
          </p>
        </>
      }
    />
  )
}

export default BusinessOutcomesSection2
