import { Swiper, useSwiper } from 'swiper/react'
import {
  Pagination,
  Mousewheel,
  Keyboard,
  HashNavigation,
} from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import { useEffect, useState, useRef } from 'react'

interface Props {
  sections: {
    id: string
    Component: React.FC
  }[]
}

let timeOutId: NodeJS.Timeout

const NavigationHandler: React.FC<{ sections: Props['sections'] }> = ({
  sections,
}) => {
  const swiper = useSwiper()

  // Handle hash navigation on initial load
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const index = sections.findIndex((s) => s.id === hash)
        if (index !== -1) {
          // Use setTimeout to ensure swiper is ready
          setTimeout(() => {
            swiper.slideTo(index, 0) // 0 speed for instant slide
          }, 100)
        }
      }
    }

    // Handle initial load
    handleNavigation()

    // Handle hash changes (external navigation)
    window.addEventListener('hashchange', handleNavigation)

    return () => {
      window.removeEventListener('hashchange', handleNavigation)
    }
  }, [swiper, sections])

  return null
}

export const FullPageSlider: React.FC<Props> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [allowSwip, setAllowSwip] = useState(true)
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    return () => {
      clearTimeout(timeOutId)
    }
  }, [])

  // Handle same-page hash navigation
  useEffect(() => {
    const handleSamePage = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href]')

      if (link) {
        const href = link.getAttribute('href')
        const currentPath = window.location.pathname
        const linkPath = new URL(href || '', window.location.origin).pathname
        const linkHash = new URL(
          href || '',
          window.location.origin
        ).hash.replace('#', '')

        // If clicking a link on same page with hash, navigate immediately
        if (linkPath === currentPath && linkHash) {
          e.preventDefault()
          window.location.hash = linkHash

          // Manually trigger swiper slide change if swiper exists
          if (swiperRef.current?.swiper) {
            const index = sections.findIndex((s) => s.id === linkHash)
            if (index !== -1) {
              swiperRef.current.swiper.slideTo(index, 0)
            }
          }
        }
      }
    }

    document.addEventListener('click', handleSamePage)
    return () => document.removeEventListener('click', handleSamePage)
  }, [sections])

  return (
    <>
      <div className='hidden lg:block'>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Pagination, Mousewheel, Keyboard, HashNavigation]}
          className='h-[100dvh]'
          direction='vertical'
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          speed={800}
          freeMode={false}
          longSwipes={false}
          onSlideChangeTransitionStart={() => setAllowSwip(false)}
          onSlideChangeTransitionEnd={() => {
            timeOutId = setTimeout(() => {
              setAllowSwip(true)
            }, 400)
          }}
          longSwipesRatio={0}
          allowSlideNext={allowSwip}
          allowSlidePrev={allowSwip}
          preventInteractionOnTransition
        >
          <NavigationHandler sections={sections} />
          {sections?.map(({ id, Component }) => (
            <SwiperSlide
              id={id}
              key={id}
              data-hash={id}
              className='flex h-full items-center justify-center md:h-screen'
            >
              <Component />
            </SwiperSlide>
          ))}
          <PaginationDots count={sections.length} activeIndex={activeIndex} />
        </Swiper>
      </div>

      <div className='lg:hidden'>
        {sections?.map(({ id, Component }) => (
          <div id={id} key={id} className='flex items-center justify-center'>
            <Component />
          </div>
        ))}
      </div>
    </>
  )
}

const PaginationDots: React.FC<{ count: number; activeIndex: number }> = ({
  count,
  activeIndex,
}) => {
  const swiper = useSwiper()

  return (
    <div className='fixed right-10 top-1/2 z-10 hidden h-fit w-fit -translate-y-1/2 flex-col items-center justify-center gap-1 lg:flex'>
      {Array.from({ length: count })?.map((_, i) => (
        <button
          key={i}
          onClick={() => swiper.slideTo(i)}
          className='group relative flex h-4 w-4 cursor-pointer items-center justify-center rounded-xl'
        >
          <div
            className={`aspect-square w-[0.375rem] rounded-full bg-slate-700 transition-transform duration-700 ease-linear ${
              activeIndex === i ? 'scale-[2.1]' : 'scale-1'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
