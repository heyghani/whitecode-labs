import { SectionType1 } from '@components/Sections/SectionType1'
import banner from '@images/Industries/industries.png'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={'Business Outcomes'}
      bannerClassname=''
      text={
        <div className='mt-2'>
          <p className='font-white'>
            We focus on outcomes, not just technology. <br />
            <br />
            Our work helps organizations reduce costs, accelerate delivery,
            strengthen resilience, and scale with confidence—creating measurable
            ROI and sustainable business impact.
          </p>
        </div>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen ',
        text: 'w-[70%] text-black',
      }}
    />
  )
}

export default Banner
