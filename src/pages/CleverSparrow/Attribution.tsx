// import React from 'react'
import content from '@images/CleverSparrow/section-2.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Attribution = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={content}
      imgAlt={'Where Traditional Attribution Breaks Down'}
      heading={'Where Traditional Attribution Breaks Down'}
      rtl
      text={
        <>
          <p>
            Most attribution tools rely on last-click models that ignore
            multi-touch journeys and create inconsistent views across platforms.
          </p>
          <p>
            The result: misallocated spend, heavy analyst dependence, and
            limited visibility into true CAC, LTV, and ROAS — slowing growth and
            eroding efficiency.
          </p>
          <br />
        </>
      }
    />
  )
}
