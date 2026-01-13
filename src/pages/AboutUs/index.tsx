import Footer from '@components/Footer'
import Banner from './Banner'
import OurCapabilities from './OurCapabilities'
import OurValues from './OurValues'
import Awards from './AwardsAndAcolades'
import OurClients from './OurClients'
import OurVision from './OurVision'
import OurPurpose from './OurPurpose'
import OurCommitment from './OurCommitment'
import { FullPageSlider } from '@components/FullPageSlider'

const sections = [
  { id: 'banner', Component: Banner },
  { id: 'our-capabilities', Component: OurCapabilities },
  { id: 'our-values', Component: OurValues },
  { id: 'our-vision', Component: OurVision },
  { id: 'awards', Component: Awards },
  { id: 'our-purpose', Component: OurPurpose },
  { id: 'our-clients', Component: OurClients },
  { id: 'our-commitment', Component: OurCommitment },
  { id: 'footer', Component: Footer },
]

function AboutUs() {
  return <FullPageSlider sections={sections} />
}

export default AboutUs
