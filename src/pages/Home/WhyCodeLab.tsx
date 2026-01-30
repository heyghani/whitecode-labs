// import React from 'react'
import Hero from '@images/Home/WhiteCodeLab/white-codelab.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const WhyCodeLab = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Why White Code Labs?'}
      heading={'Why White Code Labs?'}
      rtl
      text={
        <>
          <b className='lg:mb-4'>
            Because mission-critical systems demand stronger foundations.
          </b>
          <p>
            White Code Labs partners with enterprises where failure is not an
            option, fixing foundational issues in architecture, ownership, and
            governance so systems scale reliably, operate predictably, and
            deliver lasting value long after launch.
          </p>
        </>
      }
    />
  )
}

export default WhyCodeLab
