import Link from 'next/link'
import React from 'react'
import { FaGoogleDrive, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const bottomMenus =[
    {label: 'Home', link: '/home'},
    {label: 'About', link: '/about'},
    {label: 'Contact', link: '/contact'},
    {label: 'Pricing', link: '/pricing'},
  ]
  return (
    <div className='bg-[#FAFAFA]'>
      <div className="container mx-auto pt-[184px] flex justify-between items-end">
        <h1>
          <span className='font-Leckerli_One text-[78px] leading-[78px] text-[#6246E4]'>B</span>
          <span className='font-Leckerli_One text-[78px] leading-[78px] text-[#354253]'>B</span>
        </h1>
        <ul className='flex space-x-10'>
          {
            bottomMenus?.map((menu, index) => (
              <li key={index}><Link href={menu.link}><span className='font-Akaya_Kanadaka text-[20px] text-[#4F4F4F]'>{menu.label}</span></Link></li>
            ))
          }
        </ul>
      </div>
      <div className="h-[3px] bg-[#E4E4E4] mt-[14px]"/>
      <div className="py-[38px] container mx-auto flex justify-between">
        <p className='font-Cabin font-semibold text-[14px] leading-[14px] text-[#4F4F4F]'>@ All right reserved 2020 <span>Design By Rotich Jacobi</span></p>
        <div className="flex items-center">
          <div className="h-[2px] w-[100px] bg-[#E9E9E9]"/>
          <p className='ml-5 font-Akaya_Kanadaka text-[#4F4F4F]'>FOLLOW US</p>
          <div className="ml-[50px]">
            <ul className='flex space-x-[20px]'>
              <li><Link href={'#'}><div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#E9E9E9]'><FaGoogleDrive size={14} color="#6246E4"/></div></Link></li>
              <li><Link href={'#'}><div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#E9E9E9]'><AiFillInstagram size={14} color="#6246E4"/></div></Link></li>
              <li><Link href={'#'}><div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#E9E9E9]'><FaTwitter size={14} color="#6246E4"/></div></Link></li>
              <li><Link href={'#'}><div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#6246E4]'><FaFacebookF size={14} color="#FFFFFF"/></div></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
