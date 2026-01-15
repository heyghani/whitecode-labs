// import React from 'react'
import content1 from '@images/VelocityAnalytics/content1.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Velocity = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={content1}
      imgAlt={'Velocity Analytics'}
      heading={'Velocity Analytics™: Real-Time Growth Insights for High-Velocity Teams.'}
      text={
        <>
          <p>
            Velocity Analytics™ by White Code Labs delivers real-time, decision-ready growth insights — without the cost, complexity, or lock-in of traditional analytics platforms.
          </p>
          <p>
            Stop paying the enterprise tax. Velocity Analytics delivers sub-second growth insights — live in days and priced for startups.
          </p>
        </>
      }
    />
  )
}
