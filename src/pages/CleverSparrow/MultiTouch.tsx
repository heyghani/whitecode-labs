// import React from 'react'
import content from '@images/CleverSparrow/section-1.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const MultiTouch = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={content}
      imgAlt={'Clever Sparrow™'}
      heading={'Clever Sparrow™: Multi-Touch Attribution That Actually Works'}
      text={
        <>
          <p>
            Clever Sparrow integrates major ad platforms with Stripe to deliver
            accurate, multi-touch revenue attribution using advanced models
            beyond last-click measurement.
          </p>
          <p>
            Deploy in as little as 14 days for revenue-ready, decision-grade
            insights.
          </p>
          <br />
        </>
      }
    />
  )
}
