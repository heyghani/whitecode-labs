// import React from 'react'
import content from '@images/CleverSparrow/section-3.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const WhyChoose = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={content}
      imgAlt={'Why Teams Choose Clever Sparrow™'}
      heading={'Why Teams Choose Clever Sparrow™'}
      text={
        <>
          <p>
            Clever Sparrow™ delivers real-time, revenue-accurate attribution
            without enterprise complexity or hidden costs.
          </p>
          <p>
            With automated scaling, cross-platform discrepancy detection, and
            cohort-level CAC and LTV, teams gain the insights needed to allocate
            spend confidently and operate without heavy analyst overhead.
          </p>
          <br />
        </>
      }
    />
  )
}
