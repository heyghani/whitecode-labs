import Footer from '../../components/Footer'
import AboutUs from './AboutUs'
import Capabilities from './Capabilities'
import HomeSlider from './HomeSlider'
import OurMission from './OurMission'
import OurSolutions from './OurSolutions'
import WhyCodeLab from './WhyCodeLab'
// import LastSection from './LastSection'
import { FullPageSlider } from '@components/FullPageSlider'
import BusinessOutcomes from './BusinessOutcomes'
import CTA from './CTA'

const sections = [
  { id: 'home', Component: HomeSlider },
  { id: 'about', Component: AboutUs },
  { id: 'our-mission', Component: OurMission },
  { id: 'white-codelab', Component: WhyCodeLab },
  { id: 'our-solutions', Component: OurSolutions },
  { id: 'business-outcomes', Component: BusinessOutcomes },
  { id: 'capabilities', Component: Capabilities },
  { id: 'make-move', Component: CTA },
  { id: 'footer', Component: Footer },
]
function Home() {
  return <FullPageSlider sections={sections} />
}

export default Home
