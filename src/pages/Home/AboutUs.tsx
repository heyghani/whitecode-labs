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
            White Code Labs architects secure, scalable digital ecosystems that
            deliver measurable enterprise value. We are the technology partner
            ambitious organizations turn to when the stakes are high and
            mediocrity isn’t an option.
          </p>
          <p>
            We modernize legacy infrastructure, integrate mission-critical
            systems, and engineer cloud-native, data-driven, and AI-powered
            platforms built for 99.9% uptime, regulatory compliance, and
            enterprise-grade security. Beyond technology, we deliver strategic
            partnership, deep domain expertise, and a relentless commitment to
            your success.
          </p>
          
        </>
      }
    />
  )
}

export default OurMission
