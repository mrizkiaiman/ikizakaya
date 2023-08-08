import { DefaultPage } from '@/components/layouts/default'
import { LabelValue } from '@/types'
import Image from 'next/image'

export const Intro = () => {
  const titles: Array<string> = ['Delicious.', 'Convenient. Affordable.']
  const descs: Array<string> = [
    'Indulge in a culinary adventure at our one-of-a-kind venue.',
    'Discover new and exciting flavors that will tantalize your taste.',
  ]
  const credibilities: Array<LabelValue> = [
    {
      label: '9+',
      value: 'years of service',
    },
    {
      label: '120+',
      value: 'Store in the world',
    },
  ]

  return (
    <DefaultPage className="flex items-center pl-16 pr-0 justify-between h-[calc(100vh-96px)]">
      <section className="w-6/12 flex flex-col h-full pt-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            {titles.map((title) => (
              <h1 key={title} className="text-6xl font-extrabold tracking-[-3px] text-black-gradient">
                {title}
              </h1>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {descs.map((desc) => (
              <p key={desc} className="font-extralight text-2xl">
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-12 gap-8">
          <div className="rounded-lg px-7 py-4 bg-orange-400">
            <p className="font-extrabold text-tight text-xl text-white">Order Now</p>
          </div>
          <p className="font-extrabold tracking-[-0.08rem] text-2xl text-main-gradient">Explore the menu</p>
        </div>
        <div className="mt-40 w-3/4 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
          {credibilities.map((credibility, index) => (
            <div key={index} className="flex flex-col justify-center items-center w-1/2 gap-1">
              <p className="text-center font-bold text-gray-500 text-xl">{credibility.label}</p>
              <p className="text-gray-700 font-light">{credibility.value}</p>
            </div>
          ))}
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
        <div className="absolute self-end w-full h-3/4 rounded-tl-full rounded-tr-none rounded-br-none rounded-bl-none bg-gradient-to-b from-orange-400 to-yellow-200" />
      </section>
    </DefaultPage>
  )
}

export default Intro
