import ProductList from '@/data/special-offers.json'

import { DefaultPage } from '@/components/layouts/default'
import { ProductSpecialOffers } from '@/components/pages/landing/special-offers/product'

export const SpecialOffers = () => {
  return (
    <DefaultPage className="py-36">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-extrabold tracking-tighter">
          Today <span className="text-main-gradient">Special</span> Offers
        </h1>
        <div className="flex flex-col items-center justify-center">
          <p className="font-thin text-2xl">Best cooks and best delivery guys all at your service. Hot tasty </p>
          <p className="font-thin text-2xl">food will reach you in 60 minutes.</p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-16 mt-16">
          {ProductList.map((product) => (
            <ProductSpecialOffers
              key={product.name}
              price={product.price}
              img={product.img}
              name={product.name}
              desc={product.desc}
              rating={product.rating}
              reviewCount={product.reviewCount}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </DefaultPage>
  )
}

export default SpecialOffers
