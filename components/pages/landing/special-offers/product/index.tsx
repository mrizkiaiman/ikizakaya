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
    <div className="flex flex-col">
      <Image src={img} style={{ objectFit: 'contain' }} width={280} height={280} alt={`${name}-image`} className="self-center" />
      <p className="text-center text-lg tracking-tighter pt-4 font-bold text-black-gradient">{name}</p>
    </div>
  )
}

export default ProductSpecialOffers
