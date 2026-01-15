import Footer from '@components/Footer'
import { FullPageSlider } from '@components/FullPageSlider'
import Banner from './Banner'
import { Velocity } from './Velocity'
import { Velocity2 } from './Velocity2'
import { Velocity3 } from './Velocity3'
import { Velocity4 } from './Velocity4'
import { Velocity5 } from './Velocity5'
import { Velocity6 } from './Velocity6'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'velocity', Component: Velocity },
  { id: 'velocity2', Component: Velocity2 },
  { id: 'velocity3', Component: Velocity3 },
  { id: 'velocity4', Component: Velocity4 },
  { id: 'velocity5', Component: Velocity5 },
  { id: 'velocity6', Component: Velocity6 },
  { id: 'footer', Component: Footer },
]

function SoftwareDevelopment() {
  return <FullPageSlider sections={sections} />
}

export default SoftwareDevelopment
