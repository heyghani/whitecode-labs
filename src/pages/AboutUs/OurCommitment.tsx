// import React from 'react'
import Hero from '@images/AboutUs/OurCommitment/our-commitment.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurCommitment = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={Hero}
      imgAlt={'Our Commitment'}
      heading={'Our Commitment'}
      text={
        <>
          <p className='mb-2'>
            At White Code Labs, our commitment is to deliver with integrity,
            precision, and accountability—especially where complexity, risk, and
            scale demand more than standard execution. We take ownership of
            outcomes, not just deliverables, and hold ourselves accountable for
            the real-world impact of every engagement.
          </p>
          <p>
            By partnering closely with our clients, we ensure solutions are
            built to perform under pressure, evolve with changing demands, and
            deliver measurable value throughout their lifecycle—not just at
            launch.
          </p>
        </>
      }
    />
  )
}

export default OurCommitment
