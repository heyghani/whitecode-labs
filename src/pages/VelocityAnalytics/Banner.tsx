import banner from '@images/VelocityAnalytics/banner.png'
import bannerSmall from '@images/SoftwareDevelopment/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={'Velocity Analytics™.'}
      text={
        <>
          <p>
            Real-time, decision-ready analytics for modern startups — without
            enterprise pricing, overhead, or lock-in.
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
