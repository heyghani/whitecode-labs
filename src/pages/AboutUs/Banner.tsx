import banner from '@images/AboutUs/Hero/banner1.png'
import bannerSmall from '@images/AboutUs/Hero/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={'About us'}
      text={
        <>
          <p>
            White Code Labs is an award-winning, enterprise technology company.
          </p>
          <p>
            We design, build, and integrate cloud, data, and automation
            platforms that help enterprises and organizations operate securely,
            and scale efficiently.
          </p>
        </>
      }
    />
  )
}

export default Banner
