import banner from '@images/DataOps/banner.png'
import bannerSmall from '@images/HybridClouds/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={
        <>
          <span>DataOps Engineering:</span>
          <span>Automate, govern, and trust your data.</span>
        </>
      }
      text={
        'White Code Labs DataOps solutions streamline data pipelines and operations to deliver trusted, high-quality data faster—enabling reliable analytics, AI, and business decision-making at enterprise scale.'
      }
      classNames={{
        heading: 'text-[#252627] flex flex-col',
        text: 'text-[#252627] md:w-[72%] w-[80%] font-light',
      }}
    />
  )
}

export default Banner
