'use client'

import * as React from 'react'
import { AlignJustifyIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import Link from 'next/link'

import { NAVBAR_MENU } from '@/constants/navbar'

export const NavbarMobile = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <nav className="h-24 w-full px-8 flex justify-between items-center lg:hidden">
        <p className="font-bold tracking-tight text-lg">Put the logo here</p>
        <DialogTrigger asChild>
          <button aria-label="menu-button">
            <AlignJustifyIcon />
          </button>
        </DialogTrigger>
        <DialogContent className="self-center w-3/4 rounded-lg">
          <div className="flex flex-col justify-center items-center gap-10 my-8 py-4">
            {NAVBAR_MENU.map((item) => (
              <Link href={item.value} key={item.label}>
                <p className="font-bold text-xl tracking-tight">{item.label}</p>
              </Link>
            ))}
          </div>
        </DialogContent>
      </nav>
    </Dialog>
  )
}

export default NavbarMobile
