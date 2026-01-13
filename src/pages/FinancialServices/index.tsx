import { FullPageSlider } from '@components/FullPageSlider'
import Banner from './banner'

import Footer from '@components/Footer'
import RetailEcommerceSection1 from '../RetailAndEcommerce/RetailEcommerceSection1'
import RetailEcommerceSection2 from '../RetailAndEcommerce/RetailEcommerceSection2'
import RetailEcommerceSection3 from '../RetailAndEcommerce/RetailEcommerceSection3'
import RetailEcommerceSection4 from '../RetailAndEcommerce/RetailEcommerceSection4'
import RetailEcommerceSection5 from '../RetailAndEcommerce/RetailEcommerceSection5'
import RetailEcommerceSection6 from '../RetailAndEcommerce/RetailEcommerceSection6'
import RetailEcommerceSection7 from '../RetailAndEcommerce/RetailEcommerceSection7'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'retailEcommerce1', Component: RetailEcommerceSection1 },
  { id: 'retailEcommerce2', Component: RetailEcommerceSection2 },
  { id: 'retailEcommerce3', Component: RetailEcommerceSection3 },
  { id: 'retailEcommerce4', Component: RetailEcommerceSection4 },
  { id: 'retailEcommerce5', Component: RetailEcommerceSection5 },
  { id: 'retailEcommerce6', Component: RetailEcommerceSection6 },
  { id: 'retailEcommerce7', Component: RetailEcommerceSection7 },
  { id: 'footer', Component: Footer },
]

const FinancialServicesAndFintech = () => {
  return <FullPageSlider sections={sections} />
}

export default FinancialServicesAndFintech
