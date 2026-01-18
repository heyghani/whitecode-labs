import facebook from '@images/common/facebook.png'
import twitter from '@images/common/twitter.png'
import logo_footer from '@images/common/logo_footer.png'
import { Link } from '@tanstack/react-router'

export default function Footer() {
  return (
    <footer className='flex min-h-[100dvh] w-full flex-col justify-between gap-6 bg-black pt-8 text-white'>
      <div className='mx-auto flex w-full max-w-6xl flex-col justify-between gap-10 px-2 pt-10 md:flex-row'>
        <div className=''>
          <br />
          <Link to='/'>
            <img
              src={logo_footer}
              alt='White Code Labs'
              className='h-[1.85rem]'
            />
          </Link>
        </div>
        <div className='flex w-1/2 flex-col space-y-6 md:flex-row md:justify-between md:space-y-0'>
          <div>
            <h3 className='font-lato mb-4 text-[16px] font-semibold leading-[30px]'>
              Services
            </h3>
            <ul className='text-[14px] leading-[32px] text-[#DADADA]'>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/software-development'
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/cloud-service'
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/hybrid-cloud'
                >
                  Hybrid Cloud
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/dev-ops'
                >
                  DevOps
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/internet-of-thing'
                >
                  Internet of Things
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/automation'
                >
                  Automation Services
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/integration-as-a-service'
                >
                  Enterprise Integration
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/data-ops'
                >
                  DataOps
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-lato mb-4 text-[16px] font-semibold leading-[30px]'>
              Solutions
            </h3>
            <ul className='text-[14px] leading-[32px] text-[#DADADA]'>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/solutions'
                  hash='solution'
                >
                  Cloud Acceleration
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/solutions'
                  hash='solution2'
                >
                  Intelligent Automation
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/solutions'
                  hash='solution3'
                >
                  Enterprise Ecosystem
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/solutions'
                  hash='solution4'
                >
                  Analytics & Intelligence
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/solutions'
                  hash='solution5'
                >
                  Legacy Modernization
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/solutions'
                  hash='solution6'
                >
                  Delivery Acceleration
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/solutions'
                  hash='solution7'
                >
                  Data Reliability
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/solutions'
                  hash='solution8'
                >
                  Cost Intelligence
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-lato leading[30px] mb-4 text-[16px] font-semibold'>
              Company
            </h3>
            <ul className='text-[14px] leading-[32px] text-[#DADADA]'>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/about-us'
                  hash='our-vision'
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/about-us'
                  hash='our-values'
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/about-us'
                  hash='our-purpose'
                >
                  Our Purpose
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/about-us'
                  hash='our-commitment'
                >
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/about-us'
                  hash='awards'
                >
                  Awards & Accolades
                </Link>
              </li>

              <li>
                <Link
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100'
                  to='/contact-us'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=' bordet-t-white border-t py-6'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row'>
          <div className='text-center  text-gray-400'>
            © 2026 XYZ Innovations, Inc. All right reserved
          </div>
          <div className='flex space-x-4'>
            <a
              href='https://www.facebook.com/whitecodelabs/'
              rel='noreferrer'
              target='_blank'
            >
              <img src={facebook} alt='Facebook' className='h-9 w-9' />
            </a>
            <a
              href='https://twitter.com/whitecodelabs'
              rel='noreferrer'
              target='_blank'
            >
              <img src={twitter} alt='Twitter' className='h-9 w-9' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
