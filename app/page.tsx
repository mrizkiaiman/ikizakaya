import { Navbar } from '@/components/navbar'
import { NavbarMobile } from '@/components/navbar-mobile'
import { Intro } from '@/components/sections/landing/intro'
import { SpecialOffers } from '@/components/sections/landing/special-offers'

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Intro />
      <SpecialOffers />
    </>
  )
}
