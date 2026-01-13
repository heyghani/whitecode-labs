// import React from 'react'
import { SectionType2 } from '@components/Sections/SectionType2'
import Hero from '@images/Home/BusinessOutcomes/business-outcomes.png'

const BusinessOutcomes = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Business Outcomes'}
      heading={'Business Outcomes'}
      text={
        <>
          <p className='mb-2'>
            At White Code Labs, success isn't measured by technologies
            deployed—it's measured by tangible business results that impact your
            bottom line. We help enterprises achieve in weeks what traditionally
            takes quarters, turning technology investments into quantifiable
            business value.
          </p>
          <p>
            Our clients ship customer-facing features 3–5x faster, replacing
            six-figure specialist hires and fragmented tooling with integrated,
            automated solutions that scale with demand. We transform
            infrastructure from a cost center into a revenue enabler: optimizing
            cloud spend by 40–60%, reducing data incidents by 80%, and ensuring
            99.99% uptime that protects customer trust and contractual SLAs.
          </p>
        </>
      }
      btnLink='/business-outcomes'
    />
  )
}

export default BusinessOutcomes
