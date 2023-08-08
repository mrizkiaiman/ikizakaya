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
  featured?: boolean
}

export const ProductSpecialOffers: React.FC<ProductSpecialOffersProps> = ({ name, price, rating, reviewCount, desc, img, featured }) => {
  const stars = new Array(rating).fill(0)
  return (
    <div className="flex flex-col rounded-lg shadow-lg p-4">
      <Image
        src={img}
        style={{ objectFit: 'contain' }}
        width={featured ? 380 : 280}
        height={featured ? 380 : 280}
        alt={`${name}-image`}
        className="self-center"
      />
      <p className="text-center text-lg tracking-tighter pt-4 font-extrabold text-black-gradient">{name}</p>
      <div className="flex gap-2">
        {stars.map((_, index) => (
          <Image key={index} src="/icons/rating-star.svg" width={15} height={15} alt="star-icon" />
        ))}
      </div>
    </div>
  )
}

export default ProductSpecialOffers
