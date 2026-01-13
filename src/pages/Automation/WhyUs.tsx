import { SectionOuter, SectionInner } from '@components/common'
import { SectionType6 } from '@components/Sections'

export const WhyUs = () => {
  return (
    <SectionOuter>
      <SectionInner>
        <SectionType6
          classNames={{
            heading: 'text-black md:max-w-screen',
            text: 'w-full gap-4 text-[1rem]',
          }}
          heading={
            <span className='text-nowrap'>
              Why White Code Labs for Automation Services ?
            </span>
          }
          text={
            <>
              <p>
                Most automation providers deliver scripts. We deliver systems
                that think.
              </p>
              <br />
              <p>
                What if your infrastructure could heal itself before alerts ever
                fire? What if deployments adapted to demand without manual
                intervention? What if automation didn’t just execute tasks—but
                continuously optimized how your systems operate?
              </p>
              <br />
              <p>
                While many development shops build one-off automation that
                requires ongoing maintenance, we architect intelligent
                automation ecosystems designed to learn, adapt, and scale with
                your business. We don’t just remove manual tasks—we eliminate
                the operational debt created by fragile, siloed automation.
              </p>
            </>
          }
        />
      </SectionInner>
    </SectionOuter>
  )
}
