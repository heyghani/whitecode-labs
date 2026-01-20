import { SectionType2 } from '@components/Sections'
import img1 from '@images/Business/section-4.png'

const BusinessOutcomesSection4 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Business Outcomes Section'}
      heading={'Clever Sparrow™'}
      rtl
      btnLink='/clever-sparrow'
      text={
        <>
          <p className='mb-2'>
            Clever Sparrow by White Code Labs is a serverless, multi-touch
            attribution engine that shows which ad dollars actually drive
            revenue. It connects Google, Facebook, LinkedIn, and TikTok directly
            to Stripe using Markov chain and Shapley models, revealing the true
            customer journey beyond last-click tracking.
          </p>
          <p>
            Clever Sparrow scales automatically, detects platform discrepancies,
            and surfaces true CAC and LTV by cohort, helping startups cut wasted
            spend by up to 40% while replacing costly analysts and tooling.
            Enterprise-grade attribution—built for startups that need results,
            not guesswork.
          </p>
        </>
      }
    />
  )
}

export default BusinessOutcomesSection4
