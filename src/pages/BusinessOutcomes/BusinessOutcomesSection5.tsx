import { SectionType2 } from '@components/Sections'
import img1 from '@images/Business/section-5.png'

const BusinessOutcomesSection5 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Business Outcomes Section'}
      heading={'Enterprise Impact'}
      text={
        <>
          <p className='mb-2'>
            At White Code Labs, our Business Outcomes offerings address the
            challenges enterprises feel most acutely: slow execution, rising
            costs, fragmented systems, and unclear returns on technology
            investments.
          </p>
          <p>
            Through outcomes-as-a-service, we help organizations move faster
            with less risk. Enterprises reduce operational overhead, accelerate
            time-to-market, and gain clear, actionable visibility across
            products, platforms, and teams.
          </p>
        </>
      }
    />
  )
}

export default BusinessOutcomesSection5
