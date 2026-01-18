// import React from 'react'
import content6 from '@images/VelocityAnalytics/content6.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Velocity6 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={content6}
      imgAlt={'Velocity Analytics 6'}
      heading={'Move Faster With Confidence'}
      rtl
      text={
        <>
          <p>Delayed insights kill momentum. Overbuilt analytics kill speed.</p>
          <p>
            Velocity Analytics™ gives you real-time clarity — so you can iterate
            faster, spend smarter, and grow with precision.
          </p>
        </>
      }
    />
  )
}
