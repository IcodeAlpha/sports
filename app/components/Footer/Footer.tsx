import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
            {/* 1st part */}
            <div>
                <h1 className='text-[22px] text-white font-semibold mb-[1.5rem] uppercase'>
                    About Leagues
                </h1>
                <p className='text-[17px] text-white font-semibold text-opacity-70'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='mt-[1.5rem] flex items-center space-x-3'>
                    <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                        <FaFacebookF className='text-white'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-black-400 rounded-full flex items-center justify-center flex-col'>
                        <FaX className='text-white'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
                        <FaYoutube className='text-white'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col'>
                        <FaInstagram className='text-white'/>
                    </div>
                </div>
            </div>
            {/* 2nd Part*/}
            <div>
                <h1 className='text-[22px] text-white font-semibold mb-[1.5rem] uppercase'>
                    About Us
                </h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>About Club</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>Contacts</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>Price Table</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>Shop</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>Our Players</p>
            </div>
            {/* 3rd Part*/}
            <div>
                <h1 className='text-[22px] text-white font-semibold mb-[1.5rem] uppercase'>
                    Quick Links
                </h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>About Club</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>Contacts</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>Price Table</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>Shop</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem] uppercase'>Our Players</p>
            </div>
            {/* 4th Part*/}
            <div>
                <h1 className='text-[22px] text-white font-semibold mb-[1.5rem] uppercase'>
                    Get In Touch
                </h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>0769009184</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>alphamunene@yahoo.com</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>AlphaPubs🍺</p>            
            </div>
        </div>
        {/* copyright */}
        <h1 className='mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50'>COPYRIGHT BY ALPHAPUBS 🍺 - 2024</h1>
    </div>
  )
}

export default Footer