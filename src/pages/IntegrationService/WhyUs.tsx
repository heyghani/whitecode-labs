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
              Why White Code Labs for Integration-as-a-Service ?
            </span>
          }
          text={
            <>
              <p>
                What if your systems could talk to each other seamlessly—without
                brittle point integrations, manual workarounds, or constant
                firefighting? White Code Labs makes integration invisible,
                reliable, and scalable.
              </p>
              <br />
              <p>
                We help organizations connect applications, data, and workflows
                across cloud, on-prem, and third-party platforms through a
                unified Integration-as-a-Service (iPaaS) approach. Our solutions
                eliminate data silos, reduce operational friction, and ensure
                information flows securely and consistently across the
                enterprise.
              </p>
            </>
          }
        />
      </SectionInner>
    </SectionOuter>
  )
}
