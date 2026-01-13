import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-2.png'

const RetailEcommerceSection2 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Retail & E-Commerce Section 1'}
      heading={'Retail & E-Commerce Section 1'}
      rtl={true}
      text={
        <>
          <p>
            We work with real estate organizations to deliver services,
            solutions, and products.
          </p>
          <p>
            Our work enhances asset performance, streamlines operations, and
            enables data-driven decision-making across portfolios.
          </p>
        </>
      }
      btnLink='/retail-and-ecommerce'
    />
  )
}

export default RetailEcommerceSection2
