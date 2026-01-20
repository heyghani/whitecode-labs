import banner from '@images/Solutions/Banner-Solutions.jpg'
import bannerSmall from '@images/Solutions/banner-solutions2.jpg'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={'Our Solutions'}
      text={
        <>
          <p>
            Purpose-built solutions that solve real problems—scalable,
            integrated, and focused on measurable business outcomes.
          </p>
        </>
      }
      classNames={{
        heading: 'text-[#252627] font-bold w-[85%] md:max-w-screen',
        text: 'text-black  w-[70%]',
      }}
    />
  )
}

export default Banner
