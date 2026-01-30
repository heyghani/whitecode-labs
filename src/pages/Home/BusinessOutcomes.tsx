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
          <b className='lg:mb-4'>
            Accountability for measurable enterprise impact.
          </b>
          <p>
            White Code Labs delivers measurable business outcomes by improving
            delivery velocity, optimizing cloud and infrastructure spend, and
            increasing the reliability of mission-critical systems—so technology
            directly reduces risk, supports growth, and compounds value over
            time.
          </p>
        </>
      }
      btnLink='/business-outcomes'
    />
  )
}

export default BusinessOutcomes
