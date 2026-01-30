import { twMerge } from 'tailwind-merge'
import { SectionInner } from '../../components/common'

type Props = {
  img: string
  imgAlt: string
  heading: string | React.ReactNode
  text: string | React.ReactNode
  classNames?: {
    container?: string
  }
  rtl?: boolean
}

export const SectionType5 = ({
  img,
  imgAlt,
  heading,
  text,
  rtl,
  classNames,
}: Props) => {
  return (
    <SectionInner className='h-full max-h-full overflow-hidden px-4 sm:px-6 md:px-0'>
      <div
        className={twMerge(
          'flex h-full max-h-full flex-wrap-reverse items-stretch justify-center gap-4 sm:gap-6 md:gap-8',
          rtl ? 'flex-row-reverse ' : '   ',
          classNames?.container
        )}
      >
        <div className='sm:flex-1 md:pt-16'>
          <h5 className='font-lato mb-2 text-[16px] font-bold leading-[20px] sm:text-[17px] md:text-[18px] md:leading-[24px]'>
            {heading}
          </h5>
          <div className='flex flex-col justify-center gap-3 text-[13px] leading-[18px] text-[#666666] sm:gap-4 sm:text-[14px] sm:leading-[20px] md:gap-6 md:text-[15px] md:leading-[22px]'>
            {text}
          </div>
        </div>

        <div className=' flex h-full items-center justify-center overflow-hidden rounded-xl  sm:flex-1'>
          <img src={img} alt={imgAlt} className='h-full w-full object-cover ' />
        </div>
      </div>
    </SectionInner>
  )
}
