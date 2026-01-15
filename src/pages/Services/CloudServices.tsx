// import React from 'react'
import img1 from '@images/Services/img2.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const CloudServices = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Cloud Services'}
      heading={'Cloud Services'}
      text={
        <>
          <p>
            White Code Labs designs and delivers secure, scalable cloud
            platforms that enable agility, performance, and operational
            efficiency across your organization.
          </p>
          <p>
            From cloud strategy to implementation and optimization, we build
            environments that are resilient by design, cost-aware, and aligned
            to your business objectives—so the cloud accelerates innovation
            without increasing complexity.
          </p>
        </>
      }
      btnLink='/cloud-service'
      rtl
    />
  )
}
