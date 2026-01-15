// import React from 'react'
import img1 from '@images/Services/img1.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const SoftwareDevelopment = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Software Development'}
      heading={'Software Development'}
      text={
        <>
          <p>
            White Code Labs combines modern engineering practices, scalable
            architectures, and deep domain expertise to design and deliver
            software that supports growth, resilience, and long-term business
            value.
          </p>
          <p>
            From concept to production, we engineer systems that integrate
            seamlessly, scale predictably, and evolve with your business—turning
            technology into a competitive advantage, not a constraint.
          </p>
        </>
      }
      btnLink='/software-development'
    />
  )
}
