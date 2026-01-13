import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-1.png'

const RetailEcommerceSection1 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Retail & E-Commerce Section'}
      heading={'Retail & E-Commerce Section 1'}
      text={
        <>
          <p>
            Construction We support construction organizations with
            enterprise-grade services, scalable solutions, and purpose-built
            products.
          </p>
          <p>
            Our work improves project visibility, reduces delays, and
            strengthens operational control across complex, multi-site
            environments.
          </p>
        </>
      }
      btnLink='/retail-and-ecommerce'
    />
  )
}

export default RetailEcommerceSection1
