import { SectionOuter, SectionInner } from '@components/common'
import { SectionType6 } from '@components/Sections'

export const WhyUs = () => {
  return (
    <SectionOuter>
      <SectionInner>
        <SectionType6
          heading={
            <span className='text-nowrap'>
              Why White Code Labs for DevOps Engineering?
            </span>
          }
          text={
            <>
              <p>
                What if your teams could release faster without increasing risk,
                complexity, or operational overhead?
              </p>
              <p>
                That’s where White Code Labs stands apart. We engineer DevOps
                systems that prioritize reliability, security, and
                predictability—so speed becomes a business advantage, not a
                liability. Our approach is production-first, built for
                real-world scale, governance, and long-term operational
                maturity.
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
