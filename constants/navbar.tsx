export interface Navbar {
  label: string
  value: string
}

export const NAVBAR_MENU: Array<Navbar> = [
  {
    label: 'Home',
    value: '/',
  },
  {
    label: 'Menu',
    value: '/menu',
  },
  {
    label: 'Blog',
    value: 'https://mrizkiaiman.medium.com',
  },
  {
    label: 'Promo',
    value: '/promo',
  },
]
