// import React from 'react'
import { SectionType2 } from '@components/Sections/SectionType2'
import Hero from '@images/Home/BusinessOutcomes/business-outcomes.png'

const BusinessOutcomes = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Business Outcomes'}
      heading={'Business Outcomes'}
      rtl
      text={
        <>
          <p className='mb-2'>
            We help enterprises move faster and operate more efficiently without
            sacrificing governance or reliability. Our engagements focus on
            improving delivery velocity, optimizing cloud and infrastructure
            spend, and increasing system availability across mission-critical
            platforms.
          </p>
          <p>
            The result is technology that supports business growth, reduces
            operational risk, and delivers sustained value over time
          </p>
        </>
      }
      btnLink='/business-outcomes'
    />
  )
}

export default BusinessOutcomes
