import { FullPageSlider } from '@components/FullPageSlider'
import Banner from './banner'

import Footer from '@components/Footer'
import BusinessOutcomesSection1 from './BusinessOutcomesSection1'
// import BusinessOutcomesSection2 from './BusinessOutcomesSection2'
import BusinessOutcomesSection3 from './BusinessOutcomesSection3'
import BusinessOutcomesSection4 from './BusinessOutcomesSection4'
import BusinessOutcomesSection5 from './BusinessOutcomesSection5'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'business1', Component: BusinessOutcomesSection1 },
  // { id: 'business2', Component: BusinessOutcomesSection2 },
  { id: 'business3', Component: BusinessOutcomesSection3 },
  { id: 'business4', Component: BusinessOutcomesSection4 },
  { id: 'business5', Component: BusinessOutcomesSection5 },
  { id: 'footer', Component: Footer },
]

const BusinessOutcomes = () => {
  return <FullPageSlider sections={sections} />
}

export default BusinessOutcomes
