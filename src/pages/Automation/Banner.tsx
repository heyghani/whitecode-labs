import banner from '@images/Automation/banner.png'
import bannerSmall from '@images/SoftwareDevelopment/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={
        <>
          <span>Automate. Optimize. Scale:</span>
        </>
      }
      text={
        <>
          <p>
            Modern organizations need automation that spans infrastructure and
            business processes.
            <br />
            We help you build scalable automation frameworks that improve
            operational efficiency, enforce consistency, and support rapid
            growth.
          </p>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen text-white',
        text: 'w-[70%] text-white',
      }}
    />
  )
}

export default Banner
