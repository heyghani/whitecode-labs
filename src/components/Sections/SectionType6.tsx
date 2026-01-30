import { twMerge } from 'tailwind-merge'

type Props = {
  heading: string | React.ReactNode
  text: string | React.ReactNode
  classNames?: {
    container?: string
    heading?: string
    text?: string
  }
}

export const SectionType6 = ({ heading, text, classNames }: Props) => {
  return (
    <div
      className={twMerge(
        'mb-3 flex flex-col gap-4 sm:mb-4 md:mb-0 md:flex-row md:items-center md:gap-10',
        classNames?.container
      )}
    >
      <div className='flex-1'>
        <h3
          className={twMerge(
            'font-lato flex-1 text-[16px] font-medium leading-[22px] tracking-[-0.2px] text-black sm:text-[20px] sm:font-semibold sm:leading-[26px] md:pr-0 md:text-right md:text-[26px] md:font-semibold md:leading-[32px]',
            classNames?.heading
          )}
        >
          {heading}
        </h3>
      </div>
      <div className='flex-1'>
        <p
          className={twMerge(
            'flex-1 text-[13px] leading-[18px] text-[#666666] sm:text-[14px] sm:leading-[20px] md:px-0 md:text-[15px] md:leading-[22px]',
            classNames?.text
          )}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
