import { SectionType2 } from '@components/Sections'

import img from '@images/Services/dataOps.png'

export const DataOps = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img}
      imgAlt={'DataOps'}
      heading={'DataOps'}
      btnLink='/data-ops'
      text={
        <>
          <p>
            White Code Labs designs and delivers modern DataOps platforms that
            streamline data pipelines, improve data quality, and accelerate
            access to trusted insights across the organization.
          </p>
          <p>
            From strategy to implementation and continuous optimization, we
            enable automated data workflows, governed data platforms, and
            built-in observability—so your teams can move data faster without
            compromising accuracy, security, or compliance.
          </p>
        </>
      }
    />
  )
}

export default DataOps
