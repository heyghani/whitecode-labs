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
          <p className='mb-2'>
            We deliver purpose-built solutions that transform your boldest
            ambitions into reality. From intelligent automation platforms to
            enterprise-grade applications, our proven solutions don't just solve
            problems.
          </p>
          <p>
            With White Code Labs, you are not just investing in technology. You
            are investing in certainty. Every solution we build is designed to
            become the foundation of your lasting competitive edge.
          </p>
        </>
      }
    />
  )
}

export default OurSolutions
