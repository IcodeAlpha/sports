import Image from 'next/image'
import Logo from '@/public/logo.png'
import React from 'react'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'

const Nav = () => {
  return (
    <div className='h-[12vh] shadow-md'>
        <div className='flex items-center justify-between h-[100%] w-[90%] mx-auto'>
            {/* logo */}
            <Image src={Logo} alt='logo' width={80} height={80}/>
            {/* Nav Links */}
            <ul className='hidden lg:flex items-center space-x-16'>
                <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200'>
                    <Link href='#'>Home</Link>
                </li>
                <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200'>
                    <Link href='#'>About</Link>
                </li>
                <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200'>
                    <Link href='#'>News</Link>
                </li>
                <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200'>
                    <Link href='#'>Post</Link>
                </li>
                <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200'>
                    <Link href='#'>Contact</Link>
                </li>
            </ul>
            {/* Join Now Button */}
            <div className='flex items-center space-x-3'>
                <button className='px-6 py-2 sm:px-8 sm:py-2.5 transition-all duration-300 bg-blue-600 hover:bg-blue-800 text-white font-semibold'>Join Now</button>
                {/* Menu */}
                <BiMenu className='w-[2rem] h-[2rem] text-red-800 lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Nav