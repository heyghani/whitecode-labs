// import React from 'react'
import img from '@images/Services/img4.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const DevOpsService = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img}
      imgAlt={'DevOps'}
      heading={'DevOps'}
      rtl
      text={
        <>
          <p>
            White Code Labs designs and delivers modern DevOps platforms that
            unify development and operations to improve delivery speed, system
            reliability, and operational control.
          </p>
          <p>
            From strategy to implementation and continuous optimization, we
            enable automated pipelines, resilient infrastructure, and built-in
            security—so your teams can release faster without compromising
            stability, compliance, or governance.
          </p>
        </>
      }
      btnLink='/dev-ops'
    />
  )
}
