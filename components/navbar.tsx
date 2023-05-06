'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import { NAVBAR_MENU } from '@/constants/navbar'

export const Navbar = () => {
  return (
    <NavigationMenu className="h-24 px-16 w-full hidden lg:flex justify-between items-center">
      <h3 className="font-extrabold tracking-tighter text-xl text-main-gradient">Put the logo here</h3>

      <NavigationMenuList className="flex items-center gap-4">
        {NAVBAR_MENU.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link href={item.value} legacyBehavior passHref className="font-extrabold">
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'text-base font-bold')}>{item.label}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <button className="flex justify-center items-center px-6 py-2 rounded-xl bg-orange-400">
          <p className="tracking-tight text-base font-extrabold text-white">Contact Us</p>
        </button>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
