// import React from 'react'
import content3 from '@images/VelocityAnalytics/content3.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Velocity3 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={content3}
      imgAlt={'Velocity Analytics 3'}
      heading={'Analytics That Moves at Startup Speed'}
      text={
        <>
          <p>
            Velocity Analytics™ is built for lean teams that need real-time answers — not monthly reports.
          </p>
          <p>
            With pre-built connectors, SQL-based transformations, and instant dashboards, teams go live in days — not months — gaining immediate visibility into what drives growth.
          </p>
        </>
      }
    />
  )
}
