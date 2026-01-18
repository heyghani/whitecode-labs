import { SectionType2 } from '@components/Sections'
import img1 from '@images/Solutions/section7.png'

const Solutions7 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Solution 6'}
      heading={'DataOps & Real-Time Data Reliability Solutions'}
      text={
        <>
          <p className='mt-2'>
            Make data fast, trusted, and always available. Our DataOps solutions
            give engineering, analytics, and business teams reliable, real-time
            data—enabling faster decisions and confident execution.
          </p>
          <p>
            Unlike traditional, batch-driven data platforms, we deliver
            automated, observable, and resilient data operations by design.
            Through cloud-native pipelines, built-in data quality, end-to-end
            observability, and governance-as-code, we reduce data failures by
            60–80% and accelerate data delivery by 5–10× at enterprise scale.
          </p>
        </>
      }
    />
  )
}

export default Solutions7
