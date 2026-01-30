import { twMerge } from 'tailwind-merge'
import { Link } from '@tanstack/react-router'
import {
  Button,
  SectionHeader,
  SectionInner,
  SectionOuter,
} from '../../components/common'

type Props = {
  img: string
  imgAlt: string
  heading: string | React.ReactNode
  text: string | React.ReactNode
  btnLink?: string
  classNames?: {
    container?: string
  }
  rtl?: boolean
}

export const SectionType2 = ({
  img,
  imgAlt,
  heading,
  text,
  btnLink,
  classNames,
  rtl,
}: Props) => {
  return (
    <SectionOuter className={classNames?.container}>
      <SectionInner>
        {heading ? <SectionHeader>{heading}</SectionHeader> : null}

        <div
          className={twMerge(
            'flex flex-wrap-reverse justify-center gap-4 md:gap-12',
            rtl ? 'flex-row-reverse ' : '   '
          )}
        >
          <div className='flex w-full flex-col justify-start gap-4 text-[13px] leading-[18px] text-[#666666] sm:flex-1 sm:text-[14px] sm:leading-[20px] md:gap-6 md:text-base md:leading-[22px] lg:mt-[90px]'>
            {text}
            {btnLink ? (
              <div className='mt-4 flex w-full justify-center md:justify-start'>
                <Link to={btnLink}>
                  <Button
                    varient={'outline'}
                    text='Learn More'
                    className={'md:px-auto px-6'}
                  />
                </Link>
              </div>
            ) : null}
          </div>
          <div className='flex w-full items-center sm:flex-1'>
            <img
              src={img}
              alt={imgAlt}
              className='mx-auto h-auto max-h-full w-full max-w-[90%] rounded-md sm:max-w-full md:h-[438px] md:w-[508px]'
            />
          </div>
        </div>
      </SectionInner>
    </SectionOuter>
  )
}
