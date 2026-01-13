import banner from '@images/Solutions/Banner-Solutions.jpg'
import bannerSmall from '@images/Solutions/banner-solutions2.jpg'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={'Our Solutions'}
      text={
        <>
          <p className='font-black'>
            Purpose-built solutions that solve real problems—scalable,
            integrated, and focused on measurable business outcomes.
          </p>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen ',
        text: 'w-[70%]',
      }}
    />
  )
}

export default Banner
