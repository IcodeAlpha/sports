import React from 'react'

interface Props {
    title:string;
    image:string;
    date:string;
    height:string;
}

const NewsCard = ({ date, height, image, title }: Props) => {
    const cardBackground = {
        backgroundImage:`url(${image})`,
    }
  return (
    <div 
    className={`relative flex items-start justify-end flex-col bg-cover bg-center ${height}`}
    style={cardBackground}
    >
        {/* card overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#0000008f] h-[100%]'></div>
        {/* card content */}
        <div className='relative z-[10] p-4'>
          <div className='flex items-center space-x-4'>
            <h1 className='w-fit px-4 text-[12px] py-[2px] uppercase bg-red-500 text-white'>Football</h1>
            <p className='text-white text-opacity-75'>{date}</p>
          </div>
          <h1 className='text-[20px] hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 uppercase mt-[0.5rem] text-white font-semibold'>{title}</h1>
          <div>
            <p className='mt-[1rem] hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 text-white text-[17px] font-semibold w-fit'>Read More</p>
          </div>
        </div>
    </div>
  )
}

export default NewsCard