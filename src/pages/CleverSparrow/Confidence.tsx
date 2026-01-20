// import React from 'react'
import content from '@images/CleverSparrow/section-4.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Confidence = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={content}
      imgAlt={'Move Faster With Confidence.'}
      heading={'Move Faster With Confidence.'}
      rtl
      text={
        <>
          <p>
            Guesswork kills ad efficiency. Overbuilt analytics slow teams down.
          </p>
          <p>
            Clever Sparrow™ gives real-time clarity on true campaign
            performance, so you can cut wasted spend, optimize budgets, and grow
            with precision.
          </p>
          <br />
          <br />
        </>
      }
    />
  )
}
