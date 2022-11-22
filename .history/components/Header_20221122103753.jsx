import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {

  const menuItems = [
    { label: 'Home', link: '/home'},
    { label: 'About', link: '/about'},
    { label: 'Contact', link: '/contact'},
    { label: 'Pricing', link: '/pricing'},
  ]

  return (
    <div className={`${styles.header__root} fixed z-40 top-0 w-full`}>
      <div className={`flex justify-between items-center h-full container mx-auto`}>
        <div className={`${styles.header__logo}`}>
          <span className={`${styles.header__logo_s}`}>S</span>
          <span className={`${styles.header__logo_p}`}>P</span>
        </div>
        <div className="menu">
          <ul className='flex space-x-10'>
            { menuItems?.map((menu, index) => (
              <li key={}><Link href={menu.link}><span className={`${styles.header__menu} font-Cabin font-semibold`}>{menu.label}</span></Link></li>
            ))}
          </ul>
        </div>
        <div className="action">
            <ul className='flex items-center space-x-8'>
              <li><Link href={'/sign-in'}><span className={`font-Amatic_SC text-[20px]`}>Sign in</span></Link></li>
              <li><Link href={'/sign-in'}><span className={`font-Akaya_Kanadaka text-white text-[18px] bg-[#6246E4] px-10 py-4 rounded-lg`}>Sign Up</span></Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
