// import React from 'react'
import Hero from '@images/Home/WhiteCodeLab/white-codelab.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const WhyCodeLab = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Why White Code Labs?'}
      heading={'Why White Code Labs?'}
      text={
        <>
          <p className='mb-2'>
            White Code Labs partners with enterprises to deliver
            mission-critical systems that combine institutional-grade security,
            operational resilience, and measurable business impact. With deep
            expertise across cloud infrastructure, data architecture, and
            enterprise integration, we build solutions that meet the rigorous
            compliance, performance, and governance standards required by
            Fortune 500 organizations.
          </p>
          <p>
            Our teams integrate seamlessly with your IT organization—providing
            dedicated technical leadership, transparent governance, and
            accountable delivery against defined SLAs. We engineer
            infrastructure designed for regulatory compliance, 99.99% uptime,
            and long-term operational excellence that reduces risk and performs
            reliably under global enterprise demands.
          </p>
        </>
      }
    />
  )
}

export default WhyCodeLab
