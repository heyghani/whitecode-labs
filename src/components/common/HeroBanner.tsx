import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const HeroBanner = ({
  backgroundImage,
  children,
  classNames,
}: {
  backgroundImage: string
  children: ReactNode
  classNames?: { container?: string; innerContainer?: string }
}) => {
  return (
    <div
      className={twMerge(
        `bg-[url(${backgroundImage})] flex h-full items-center bg-cover bg-center bg-no-repeat`,
        classNames?.container
      )}
    >
      <div
        className={twMerge(
          'mx-auto flex min-h-[300px] max-w-6xl flex-col items-center justify-center space-y-4 px-4 text-center sm:h-80 sm:space-y-6 sm:px-6 md:space-y-4',
          classNames?.innerContainer
        )}
      >
        {children}
      </div>
    </div>
  )
}
