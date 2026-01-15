import banner from '@images/DevOps/banner.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={
        <>
          <span>DevOps Engineering:</span>
          <span>Automate, accelerate, operate with confidence.</span>
        </>
      }
      text={
        'White Code Labs DevOps solutions unify development and operations to enable faster releases, resilient systems, and predictable delivery at enterprise scale.'
      }
      classNames={{
        heading: 'text-[#252627] flex flex-col',
        text: 'text-[#252627] md:w-[72%] w-[80%] font-light',
      }}
    />
  )
}

export default Banner
