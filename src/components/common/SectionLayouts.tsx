import React from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionOuterProps {
  className?: string
  children: React.ReactNode
}

export const SectionOuter: React.FC<SectionOuterProps> = ({
  className,
  children,
}) => (
  <div
    className={twMerge(
      'page max-w-screen flex w-full flex-col items-center justify-center bg-[#F7F3F3] py-6 sm:py-8 md:py-14 min-h-[calc(100svh-64px)]',
      className
    )}
  >
    {children}
  </div>
)

interface SectionInnerProps {
  className?: string
  children: React.ReactNode
}

export const SectionInner: React.FC<SectionInnerProps> = ({
  className,
  children,
}) => (
  <div
    className={twMerge(
      'mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 md:gap-8 md:px-8 pt-4 md:pt-0',
      className
    )}
  >
    {children}
  </div>
)

interface SectionHeaderProps {
  className?: string
  children: React.ReactNode
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
}) => (
  <div
    className={twMerge(
      'font-lato text-center text-[18px] font-semibold leading-[26px] tracking-[-0.03rem] text-[#313131] sm:text-[22px] sm:font-bold sm:leading-[34px]',
      className
    )}
  >
    {children}
  </div>
)
