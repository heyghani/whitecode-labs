import banner from '@images/CleverSparrow/banner.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={'Clever Sparrow™'}
      text={
        <>
          <p className='mt-4'>
            Clever Sparrow™ by White Code Labs is a serverless, multi-touch
            attribution engine that shows which ad dollars actually drive
            revenue — without the complexity or cost of enterprise analytics.
          </p>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen ',
        text: 'w-[70%] text-[#252627]',
      }}
    />
  )
}

export default Banner
