import Image from 'next/image';
import React from 'react'

interface Props {
    title:string;
    image:string;
    date:string;
}

const SmallNewsCard = ({ date, image, title }: Props) => {
  return (
    <div className='bg-gray-500 p-4 flex items-center space-x-6'>
        {/* image */}
        <div className='hidden sm:block'>
            <Image src={image} alt={title} width={120} height={120} className='object-cover'/>

        </div>
        {/* content */}
        <div>
        <div className='flex items-center space-x-4'>
            <h1 className='w-fit px-4 text-[8px] sm:text-[10px] py-[2px] uppercase bg-red-600 text-white'>Football</h1>
            <p className='text-white text-[9px] sm:text-[12px] text-opacity-75'>{date}</p>
        </div>
        <h1 className='text-[13px] sm:text-[17px] hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 uppercase mt-[0.5rem] text-white font-semibold'>{title}</h1>
        <p className='mt-[1rem] hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 text-white text-[12px] sm:text-[15px] font-semibold'>Read More</p>
        </div>
        
    </div>
  )
}

export default SmallNewsCard