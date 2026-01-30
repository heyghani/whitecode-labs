// import React from 'react'
import Hero from '@images/Home/About/about-us-2.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurMission = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'About Us'}
      heading={'Who We Are'}
      rtl={true}
      btnLink='/about-us'
      text={
        <>
          <b className='lg:mb-4'>
            An enterprise technology partner for mission-critical systems.
          </b>
          <p>
            White Code Labs partners with organizations where reliability,
            security, and governance are non-negotiable. We design and operate
            secure, scalable platforms that support compliance, high
            availability, and long-term enterprise operations—without adding
            operational risk.
          </p>
        </>
      }
    />
  )
}

export default OurMission
