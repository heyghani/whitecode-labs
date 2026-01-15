import Footer from '@components/Footer'
import { FullPageSlider } from '@components/FullPageSlider'
import Banner from './Banner'
import { MultiTouch } from './MultiTouch'
import { Attribution } from './Attribution'
import { Confidence } from './Confidence'
import { WhyChoose } from './WhyChoose'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'multi-touch', Component: MultiTouch },
  { id: 'attribution', Component: Attribution },
  { id: 'why-choose', Component: WhyChoose },
  { id: 'confidence', Component: Confidence },
  { id: 'footer', Component: Footer },
]

function CleverSparrow() {
  return <FullPageSlider sections={sections} />
}

export default CleverSparrow
