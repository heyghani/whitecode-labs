// import React from 'react'
import Hero from '@images/Home/OurValues/our-values.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurValues = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Our Values'}
      heading={'Our Values'}
      rtl={true}
      text={
        <>
          <p className='mb-2'>
            At White Code Labs, our values shape every decision and solution we
            deliver. We believe technology should serve the business,not the
            other way around. We operate with radical transparency, prioritize
            measurable outcomes over hype, and apply innovation only where it
            creates real business advantage.
          </p>
          <p>
            We work as long-term partners, accountable for results—not just
            delivery. We recommend only what fits your business and growth
            stage, and if a solution doesn’t drive revenue, reduce cost, or
            create lasting value, we don’t ship it.
          </p>
        </>
      }
    />
  )
}

export default OurValues
