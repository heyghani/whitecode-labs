import Footer from '@components/Footer'
import { Banner } from './Banner'
import { FullPageSlider } from '@components/FullPageSlider'
import { SoftwareDevelopment } from './SoftwareDevelopment'
import { CloudServices } from './CloudServices'
import { HybridCloud } from './HybridCloud'
import { DevOpsService } from './DevOpsService'
import { InternetOfThings } from './InternetOfThings'
import { DataOps } from './DataOps'
import { CTA } from './CTA'
import Automation from './Automation'
import IntegrationAsAService from './IntegrationAsAService'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'sd', Component: SoftwareDevelopment },
  { id: 'cs', Component: CloudServices },
  { id: 'hc', Component: HybridCloud },
  { id: 'dev', Component: DevOpsService },
  { id: 'iot', Component: InternetOfThings },
  { id: 'ds1', Component: Automation },
  { id: 'ds2', Component: IntegrationAsAService },
  { id: 'ds3', Component: DataOps },
  { id: 'cta', Component: CTA },
  { id: 'footer', Component: Footer },
]

function OurServices() {
  return <FullPageSlider sections={sections} />
}

export default OurServices
