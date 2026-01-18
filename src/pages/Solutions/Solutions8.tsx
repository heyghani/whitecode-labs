import { SectionType2 } from '@components/Sections'
import img1 from '@images/Solutions/section8.png'

const Solutions8 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Solution 6'}
      heading={'Cloud FinOps & Cost Intelligence Solutions'}
      text={
        <>
          <p className='mt-2'>
            Turn cloud spend into a growth lever. Our Cloud FinOps solutions
            give engineering, finance, and leadership a shared, real-time view
            of cloud costs—enabling smarter decisions and sustained savings.
          </p>
          <p>
            Unlike traditional, report-heavy FinOps, we deliver intelligent,
            automated, and continuous cost management by design. Through
            intelligent cost allocation, usage forecasting, automated
            optimization, and governance-as-code, we reduce cloud spend by
            30–55% without compromising performance or reliability.
          </p>
        </>
      }
      rtl
    />
  )
}

export default Solutions8
