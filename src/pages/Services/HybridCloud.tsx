// import React from 'react'
import img from '@images/Services/img3.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const HybridCloud = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img}
      imgAlt={'Hybrid Cloud Services'}
      heading={'Hybrid Cloud Services'}
      text={
        <>
          <p>
            White Code Labs designs and delivers secure, integrated hybrid cloud
            platforms that combine on-premises and cloud environments to
            maximize flexibility, control, and performance.
          </p>
          <p>
            From strategy to deployment and ongoing optimization, we enable
            seamless workload portability, unified management, and built-in
            governance—so your business can innovate across environments without
            sacrificing security, compliance, or operational clarity.
          </p>
        </>
      }
      btnLink='/hybrid-cloud'
    />
  )
}
