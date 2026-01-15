// import React from 'react'
import content5 from '@images/VelocityAnalytics/content5.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Velocity5 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={content5}
      imgAlt={'Velocity Analytics 5'}
      heading={'Data Ownership & Transparency'}
      text={
        <>
          <p>
            Your data stays in your environment — fully under your control. There are no proprietary schemas, locked pipelines, or black-box transformations. Everything is built using transparent, SQL-based logic you can inspect, modify, and trust.
          </p>
          <p>
            Velocity Analytics™ is designed to grow with you. It’s easy to extend, migrate, or evolve your data stack over time — without friction or lock-in. Because respecting your data also means respecting your autonomy.
          </p>
        </>
      }
    />
  )
}
