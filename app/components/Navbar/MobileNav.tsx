import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'

interface Props {
    nav:boolean,
    closeNav:()=>void,
}

const MobileNav = ({closeNav,nav}:Props) => {

    const navStyle = nav?'translate-x-0':'translate-x-[-100%]'
  return (
    <div className={`fixed ${navStyle} right-0 left-0 bottom-0 top-0 transition-all duration-500 bg-[#000000e0] z-[1002]`}>
        {/* Close Icon */}
        <ImCross 
        onClick={closeNav}
        className='absolute top-[2rem] w-[1.5rem] h-[1.5rem] right-[2rem] text-white'/>
        {/* Navlinks div*/}
        <div className={`bg-red-600 ${navStyle} transition-all duration-500 delay-200 flex items-center justify-center w-[70%] h-[100%]`}>
        {/* nav links */}
        <ul className='space-y-10'>
                <li className='text-[27px] text-white font-medium uppercase hover:text-yellow-400 transition-all duration-200'>
                    <Link href='#'>Home</Link>
                </li>
                <li className='text-[27px] text-white font-medium uppercase hover:text-yellow-400 transition-all duration-200'>
                    <Link href='#'>About</Link>
                </li>
                <li className='text-[27px] text-white font-medium uppercase hover:text-yellow-400 transition-all duration-200'>
                    <Link href='#'>News</Link>
                </li>
                <li className='text-[27px] text-white font-medium uppercase hover:text-yellow-400 transition-all duration-200'>
                    <Link href='#'>Post</Link>
                </li>
                <li className='text-[27px] text-white font-medium uppercase hover:text-yellow-400 transition-all duration-200'>
                    <Link href='#'>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MobileNav