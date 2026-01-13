// import React from 'react'
import Hero from '@images/Home/OurMission/our-mission-img-2.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurMission = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Our Mission'}
      heading={'Our Mission'}
      text={
        <>
          <p className='mb-2'>
            Our mission is to engineer and deliver enterprise-grade services,
            solutions, and platforms that reduce operational costs, accelerate
            time-to-market, and provide the reliability modern businesses
            demand.
          </p>

          <p>
            We build secure, scalable systems; both custom and
            productized—designed for high availability, performance, and
            long-term value.
          </p>
          <br />
          <br />
        </>
      }
    />
  )
}

export default OurMission
