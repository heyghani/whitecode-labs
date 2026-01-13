import Footer from '@components/Footer'
import { FullPageSlider } from '@components/FullPageSlider'
import Banner from './Banner'
import { WhyUs } from './WhyUs'
import { OurServices } from './OurServices'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'services', Component: OurServices },
  { id: 'why-us', Component: WhyUs },
  { id: 'footer', Component: Footer },
]

function IntegrationAsAService() {
  return <FullPageSlider sections={sections} />
}

export default IntegrationAsAService
