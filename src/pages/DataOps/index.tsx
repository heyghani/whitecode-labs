import Footer from '@components/Footer'
import { FullPageSlider } from '@components/FullPageSlider'
import Banner from './Banner'
import { OurServices } from './OurServices'
import { WhyUs } from './WhyUs'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'our-services', Component: OurServices },
  { id: 'why', Component: WhyUs },
  { id: 'footer', Component: Footer },
]

function CleverSparrow() {
  return <FullPageSlider sections={sections} />
}

export default CleverSparrow
