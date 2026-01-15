import { SectionType2 } from '@components/Sections'
import img1 from '@images/Business/section-3.png'

const BusinessOutcomesSection3 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Business Outcomes Section'}
      heading={'Velocity Analytics™'}
      btnLink='/velocity-analytics'
      text={
        <>
          <p className='mb-2'>
            Velocity Analytics by White Code Labs delivers real-time growth
            insights without the enterprise price tag. This serverless DataOps
            pipeline provides sub-second analytics on funnels, CAC, and
            LTV—ingesting data directly from Stripe, Segment, and application
            databases. With pre-built connectors, SQL-based transformations, and
            a Metabase dashboard, teams are live in days, not months, for under
            $500/month.
          </p>
          <p>
            Unlike bloated analytics tools, Velocity Analytics gives startups
            full data ownership and auto-scales from zero to millions of events.
            Designed for lean teams, it enables real-time visibility into
            conversion drop-offs so growth teams can iterate 5x faster—while
            infrastructure costs scale only as revenue grows.
          </p>
        </>
      }
    />
  )
}

export default BusinessOutcomesSection3
