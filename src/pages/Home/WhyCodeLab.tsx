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
          <p className='mb-2'>
            White Code Labs partners with enterprises to build and operate
            mission-critical systems where failure is not an option. We believe
            most enterprise outages, cost overruns, and delivery delays are not
            caused by technology limitations, but by weak architecture,
            fragmented ownership, and governance gaps introduced early in the
            system lifecycle.
          </p>
          <p>We exist to correct those failures at the foundation.</p>
        </>
      }
    />
  )
}

export default WhyCodeLab
