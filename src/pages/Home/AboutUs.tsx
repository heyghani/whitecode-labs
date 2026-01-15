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
          <p>
            White Code Labs is an enterprise technology partner for
            organizations where reliability, security, and governance are
            non-negotiable. We design and modernize mission-critical systems
            that deliver measurable business impact — without introducing
            operational risk.
          </p>
          <p>
            We architect secure, scalable platforms built for regulatory
            compliance, high availability, and long-term enterprise operations.
          </p>
          <br />
        </>
      }
    />
  )
}

export default OurMission
