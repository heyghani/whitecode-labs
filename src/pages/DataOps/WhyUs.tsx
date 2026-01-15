import { SectionOuter, SectionInner } from '@components/common'
import { SectionType6 } from '@components/Sections'

export const WhyUs = () => {
  return (
    <SectionOuter>
      <SectionInner>
        <SectionType6
          heading={
            <span className='text-nowrap'>
              Why White Code Labs for DataOps Engineering?
            </span>
          }
          text={
            <>
              <p>
                What if your teams could trust their data as much as they trust
                their systems?
              </p>
              <p>
                That’s where White Code Labs stands apart. We engineer DataOps
                platforms that prioritize data quality, governance, and
                operational reliability—so insights are timely, accurate, and
                decision-ready. Our approach is production-first, built for
                real-world scale, regulatory requirements, and long-term data
                platform maturity.
              </p>
            </>
          }
          classNames={{
            text: 'flex flex-col gap-10 w-full text-[1rem]',
          }}
        />
      </SectionInner>
    </SectionOuter>
  )
}
