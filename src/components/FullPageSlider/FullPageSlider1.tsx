import { twMerge } from 'tailwind-merge'

import { ReactNode, useState, useEffect, useRef } from 'react'
import debounce from 'lodash.debounce'
import { useIsDesktopScreen } from '../../hooks'

const SnapItem = ({ id, children }: { id: string; children: ReactNode }) => {
  return (
    <div id={id} className='min-h-[100dvh] lg:snap-start '>
      {children}
    </div>
  )
}

export const ScrollSnapContainer = ({
  sections,
}: {
  sections: { id: string; Component: () => JSX.Element }[]
}) => {
  const isDesktopScreen = useIsDesktopScreen(1024)

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const handleDebouncedScroll = debounce(() => {
    if (!ref.current) return
    const scrollY = ref.current.scrollTop
    const newActiveSectionIndex =
      (Math.floor((scrollY + 100) / window.innerHeight) ?? 0 + 1) %
      sections.length
    if (newActiveSectionIndex !== activeSectionIndex) {
      setActiveSectionIndex(newActiveSectionIndex)
      // window.location.hash = sections[newActiveSectionIndex].id
    }
  }, 100)

  useEffect(() => {
    if (window.location.hash) window.location.href = window.location.pathname
  }, [])

  return (
    <div
      ref={!isDesktopScreen ? null : ref}
      className={twMerge(
        'relative h-[100dvh] scroll-smooth',
        'snap-none snap-mandatory lg:snap-y ',
        'overflow-x-hidden overflow-y-scroll'
      )}
      onScrollCapture={!isDesktopScreen ? undefined : handleDebouncedScroll}
    >
      {sections?.map(({ id, Component }) => (
        <SnapItem key={id} id={id}>
          <Component />
        </SnapItem>
      ))}
      <ul className='fixed right-10 top-1/2 z-10 hidden h-fit w-fit -translate-y-1/2 flex-col items-center justify-center gap-1 lg:flex'>
        {sections?.map(({ id }, idx) => (
          <li
            key={id}
            className='group relative flex h-5 w-5 cursor-pointer items-center justify-center rounded-xl'
          >
            {/* <div
              // href={`#${id}`}
              className='hover:w-full aspect-square flex justify-center items-center'
            > */}
            <button
              onClick={() => {
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: 'smooth' })
                setActiveSectionIndex(idx)
              }}
              className={twMerge(
                ' rounded-full bg-slate-700',
                'transition-all duration-100',
                'aspect-square',
                sections[activeSectionIndex % sections.length].id === id
                  ? 'w-full'
                  : 'w-[0.4rem]  group-hover:w-full'
              )}
            ></button>
            {/* </div>  */}
            {/* Incase we want a label to popup when hovered */}
            {/* <span
              className={twJoin(
                'transition-transform duration-100 group-hover:scale-100 scale-0',
                'absolute -top-1/2 right-full translate-y-1/4 px-3 rounded-xl',
                'whitespace-nowrap   bg-slate-200 text-slate-700 text-[14px] leading-[26px] tracking-wide '
              )}
            >
              {id}
            </span> */}
          </li>
        ))}
      </ul>
    </div>
  )
}
