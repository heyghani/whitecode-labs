import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-1.png'

const BusinessOutcomesSection1 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Business Outcomes Section'}
      heading={'Why Outcomes-as-a-Service'}
      text={
        <>
          <p className='mb-2'>
            White Code Labs enters the Outcomes-as-a-Service space because
            enterprises no longer need more vendors, tools, or delivery
            promises; they need accountability for results. We align technology
            execution directly to measurable business outcomes, removing
            uncertainty and ensuring every investment delivers real value.
          </p>
          <p>
            Our outcome-led engagements provide faster value realization,
            predictable ROI, and shared ownership of success; eliminating missed
            timelines, and sunk costs. For organizations under pressure to move
            faster, spend smarter, and deliver with confidence,
            Outcomes-as-a-Service is not an experiment—it’s a strategic
            advantage.
          </p>
        </>
      }
    />
  )
}

export default BusinessOutcomesSection1
