// import React from 'react'
import Hero from '@images/AboutUs/OurVision/our-vision-img.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurCapabilities = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={Hero}
      imgAlt={'Our Vision'}
      heading={'Our Vision'}
      text={
        <>
          <p>
            To make enterprise technology seamless, intelligent, and
            invisible—so organizations can innovate, scale, and lead with
            confidence. We engineer secure, future-ready systems for what’s
            next.
          </p>
          <p>
            We believe the next generation of enterprise platforms will be built
            on hybrid cloud, intelligent automation, and data-driven
            decision-making. Our role is to design and deliver the foundational
            systems that enable long-term resilience, governance, and
            sustainable growth.
          </p>
        </>
      }
    />
  )
}

export default OurCapabilities
