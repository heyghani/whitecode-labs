// import React from 'react'
import Hero from '@images/AboutUs/OurPurpose/our-purpose.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurPurpose = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={Hero}
      imgAlt={'Our Purpose'}
      heading={'Our Purpose'}
      rtl={true}
      text={
        <>
          <p className='mb-2'>
            At White Code Labs, our purpose is to help organizations make
            confident, high-stakes technology decisions that stand the test of
            scale, time, and change.
          </p>
          <p>
            By aligning technology strategy with real-world operating
            constraints, we enable enterprises to build systems that endure,
            adapt, and compound value—long after the initial implementation is
            complete.
          </p>
          <br />
          <br />
          <br />
        </>
      }
    />
  )
}

export default OurPurpose
