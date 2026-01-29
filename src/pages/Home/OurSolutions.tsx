// import React from 'react'
import Hero from '@images/Home/OurSolutions/our-solutions-1.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurSolutions = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={Hero}
      imgAlt={'Our Solutions'}
      heading={'Our Solutions'}
      btnLink='/solutions'
      text={
        <>
          <b className='mb-4'>Built for mission-critical outcomes.</b>
          <p>
            White Code Labs delivers purpose-built enterprise solutions that
            address real operational challenges across cloud, data, automation,
            and core platforms—engineered to integrate cleanly, scale reliably,
            and serve as durable foundations that reduce risk, accelerate
            execution, and create lasting competitive advantage.
          </p>
        </>
      }
    />
  )
}

export default OurSolutions
