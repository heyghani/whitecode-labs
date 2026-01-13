import { SectionType1 } from '@components/Sections/SectionType1'
import banner from '@images/Technology/banner-technology.png'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={'Technology & High-Growth Companies'}
      bannerClassname=''
      text={
        <>
          <p className='font-white'>
            Our products are built to solve complex operational challenges at
            scale. From cloud cost optimization to intelligent auto-scaling,
            they help teams run efficient, resilient, and high-performing
            systems.
          </p>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen ',
        text: 'w-[70%] text-black',
      }}
    />
  )
}

export default Banner
