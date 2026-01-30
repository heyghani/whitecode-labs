import { twMerge } from 'tailwind-merge'
import { SectionHeader, SectionInner, SectionOuter } from '../common'
import { Card } from '@components/common/Cards'

type Props = {
  heading: string | React.ReactNode
  cards: {
    title: string
    text: string
  }[]
  classNames?: {
    container?: string
    cards?: {
      title?: string
      text?: string
    }
  }
}

export const SectionType4 = ({ heading, classNames, cards }: Props) => {
  return (
    <SectionOuter className={twMerge('bg-white', classNames?.container)}>
      <SectionInner>
        <SectionHeader>{heading}</SectionHeader>

        <div className='grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          {cards.map((card, i) => (
            <Card key={i} {...card} classNames={classNames?.cards} />
          ))}
        </div>
      </SectionInner>
    </SectionOuter>
  )
}
