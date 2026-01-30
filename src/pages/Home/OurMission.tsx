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
          <b className='lg:mb-4'>
            Help enterprises move faster—without breaking what matters.
          </b>

          <p>
            Our mission is to help enterprises accelerate execution while
            maintaining security, governance, and long-term operability. We
            engineer enterprise-grade systems—custom and productized—built to
            perform reliably at scale, withstand real-world constraints, and
            remain compliant as organizations grow and evolve.
          </p>
        </>
      }
    />
  )
}

export default OurMission
