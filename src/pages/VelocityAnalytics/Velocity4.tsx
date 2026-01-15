// import React from 'react'
import content4 from '@images/VelocityAnalytics/content4.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Velocity4 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={content4}
      imgAlt={'Velocity Analytics 4'}
      heading={'Why Teams Trust Velocity Analytics™'}
      rtl
      text={
        <>
          <p>
            Velocity Analytics™ is priced for startups— so you avoid the enterprise pricing traps. Teams get live, actionable insights in days, not quarters, enabling rapid experimentation and iteration.
          </p>
          <p>
            Your data stays fully under your control. With full ownership, easy scaling, and a platform powerful enough to grow with your team, Velocity Analytics™ removes the friction between data and action.
          </p>
        </>
      }
    />
  )
}
