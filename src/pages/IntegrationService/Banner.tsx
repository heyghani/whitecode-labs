import banner from '@images/IntegrationService/banner.png'
import bannerSmall from '@images/SoftwareDevelopment/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={
        <>
          <span>Integration-as-a-Service:</span>
          <br />
          <span>Connect, automate, accelerate.</span>
        </>
      }
      text={
        <>
          <p>
            With our Integration-as-a-Service solutions, we help you unify your
            workflows, automate processes, and enable real-time data flow so
            your organization can operate faster, smarter, and more efficiently.
          </p>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen text-[#252627]',
        text: 'w-[70%] text-[#252627]',
      }}
    />
  )
}

export default Banner
