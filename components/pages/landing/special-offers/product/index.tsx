import * as React from 'react'
import Image from 'next/image'

interface ProductSpecialOffersProps {
  name: string
  price: number
  rating: number
  reviewCount?: number
  desc?: string
  img: string
  slug: string
}

export const ProductSpecialOffers: React.FC<ProductSpecialOffersProps> = ({ name, price, rating, reviewCount, desc, img }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-xl p-8 items-center justify-center gap-6">
      <Image src={img} style={{ objectFit: 'contain' }} width={240} height={240} alt={`${name}-image`} className="self-center" />
      <p className="text-xl tracking-tighter font-bold text-main-gradient">{name}</p>
      <div className="flex gap-2">
        {Array(rating)
          .fill('-')
          .map((_, index) => (
            <Image key={index} src="/icons/star.svg" width={30} height={30} alt="star-icon" />
          ))}
      </div>
    </div>
  )
}

export default ProductSpecialOffers
