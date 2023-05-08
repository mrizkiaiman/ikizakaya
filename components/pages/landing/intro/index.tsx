import { DefaultPage } from '@/components/layouts/default'
import Image from 'next/image'

export const Intro = () => {
  return (
    <DefaultPage className="flex items-center pl-16 pr-0 justify-between h-[calc(100vh-96px)]">
      <section className="w-6/12 flex flex-col h-full py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-8xl font-extrabold tracking-tighter text-black-gradient">Delicious. Convenient. Affordable.</h1>
          <div className="flex flex-col gap-1">
            <p className="font-extralight text-2xl">Indulge in a culinary adventure at our one-of-a-kind venue.</p>
            <p className="font-extralight text-2xl">Discover new and exciting flavors that will tantalize your taste.</p>
          </div>
        </div>
        <div className="flex items-center mt-12 gap-8">
          <div className="rounded-lg px-7 py-4 bg-orange-400">
            <p className="font-extrabold text-tight text-xl text-white">Order Now</p>
          </div>
          <p className="font-extrabold tracking-[-0.08rem] text-2xl text-main-gradient">Explore the menu</p>
        </div>
      </section>
      <section className="relative flex w-6/12 h-full">
        <Image
          src={'/illustrations/lp-banner.webp'}
          style={{ objectFit: 'contain' }}
          width={1420}
          height={1200}
          alt="japanese-food-illustration"
          className="z-10"
          priority
        />
        <div className="absolute self-end w-full h-3/4 rounded-tl-full rounded-tr-none rounded-br-none rounded-bl-none bg-gradient-to-b from-orange-500 to-yellow-300" />
      </section>
    </DefaultPage>
  )
}

export default Intro
