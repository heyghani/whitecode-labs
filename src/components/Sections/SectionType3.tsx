import { twJoin, twMerge } from 'tailwind-merge'
import { Link } from '@tanstack/react-router'
import { Button, SectionHeader, SectionInner, SectionOuter } from '../common'

type Props = {
  img: string
  imgSmall: string
  heading: string | React.ReactNode
  text: string | React.ReactNode
  cards: {
    heading: string
    text: string
    btnText: string
    btnLink: string
  }[]
  classNames?: {
    container?: string
    heading?: string
    text?: string
  }
}

export const SectionType3 = ({
  img,
  imgSmall,
  heading,
  text,
  classNames,
  cards,
}: Props) => {
  return (
    <SectionOuter
      className={twMerge(
        'flex-col justify-start gap-10 bg-white pt-0 md:pt-10',
        classNames?.container
      )}
    >
      <div
        className={`bg-[url(${imgSmall})] bg-[#CFD1D3] md:bg-[url(${img})] flex min-h-[340px] w-full items-start justify-start bg-cover bg-center bg-no-repeat md:min-h-[317px] md:items-center md:px-16`}
      >
        <SectionInner className='w-full gap-2 pt-8 sm:gap-3 md:gap-4 md:pt-0'>
          <SectionHeader
            className={twMerge(
              'text-left text-[16px] font-semibold leading-[22px] sm:text-[20px] md:text-[26px] md:leading-[32px]',
              classNames?.heading
            )}
          >
            {heading}
          </SectionHeader>
          <p
            className={twMerge(
              'max-w-[30rem] text-[12px] font-normal leading-[16px] text-[#313131] sm:text-[13px] sm:leading-[17px] md:text-[14px] md:leading-[18px]',
              classNames?.text
            )}
          >
            {text}
          </p>
        </SectionInner>
      </div>
      <div className='flex w-full flex-col gap-3 px-4 sm:px-6 md:flex-row md:gap-5 md:px-8'>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </SectionOuter>
  )
}

const Card = ({
  heading,
  text,
  btnText,
  btnLink,
}: {
  heading: string
  text: string
  btnText: string
  btnLink: string
}) => (
  <div
    className={twJoin(
      'max-w-full flex-1 bg-white text-center sm:max-w-[28rem] md:text-left',
      'rounded-xl p-3 px-4 shadow-[0px_0px_8px_1px_#0000001A] sm:p-4 sm:px-6 md:px-4',
      'flex flex-col items-center justify-between gap-2 border md:items-start'
    )}
  >
    <h4 className='font-lato text-[13px] font-bold leading-[18px] tracking-[0.1px] text-[#313131] sm:text-[14.5px] sm:leading-[20px] md:text-[15px] md:leading-[22px]'>
      {heading}
    </h4>
    <p className='text-[12px] leading-[16px] tracking-[0.1px] text-[#666666] sm:text-[13px] sm:leading-[18px] md:mb-5 md:text-[15px] md:leading-[20px]'>
      {text}
    </p>
    <Link to={btnLink}>
      <Button varient='primary' text={btnText} />
    </Link>
  </div>
)
