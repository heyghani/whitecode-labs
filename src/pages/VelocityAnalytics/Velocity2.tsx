// import React from 'react'
import content2 from '@images/VelocityAnalytics/content2.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Velocity2 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={content2}
      imgAlt={'Velocity Analytics 2'}
      heading={'Where Traditional Analytics Fails. '}
      rtl
      text={
        <>
          <p>
            Most traditional analytics tools fail to keep up with the pace of modern teams. Data arrives hours or days late, dashboards become bloated and expensive, and even simple questions get trapped in long backlogs and complex workflows.
          </p>
          <p>
            As infrastructure costs grow faster than revenue, teams lose visibility and control over their own data. For fast-moving startups, these delays don’t just slow decision-making — they erode momentum and limit growth.
          </p>
        </>
      }
    />
  )
}
