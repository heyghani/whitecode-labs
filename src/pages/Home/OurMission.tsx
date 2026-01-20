// import React from 'react'
import Hero from '@images/Home/OurMission/our-mission-img-2.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurMission = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={Hero}
      imgAlt={'Our Mission'}
      heading={'Our Mission'}
      text={
        <>
          <p className='mb-2'>
            Our mission is to help enterprises move faster and operate more
            efficiently without compromising security, governance, or long-term
            operability.
          </p>

          <p>
            We engineer enterprise-grade systems — custom and productized —
            designed to remain reliable, performant, and compliant under
            real-world enterprise conditions.
          </p>
          <br />
          <br />
        </>
      }
    />
  )
}

export default OurMission
