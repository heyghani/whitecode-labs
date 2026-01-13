import { FullPageSlider } from '@components/FullPageSlider'
import Banner from './banner'
import RetailEcommerceSection1 from './RetailEcommerceSection1'
import RetailEcommerceSection2 from './RetailEcommerceSection2'
import RetailEcommerceSection3 from './RetailEcommerceSection3'
import RetailEcommerceSection4 from './RetailEcommerceSection4'
import RetailEcommerceSection5 from './RetailEcommerceSection5'
import RetailEcommerceSection6 from './RetailEcommerceSection6'
import RetailEcommerceSection7 from './RetailEcommerceSection7'
import Footer from '@components/Footer'

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

const RetailAndEcommerce = () => {
  return <FullPageSlider sections={sections} />
}

export default RetailAndEcommerce
