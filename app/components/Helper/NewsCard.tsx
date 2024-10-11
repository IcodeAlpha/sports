import React from 'react'

interface Props {
    title:string,
    image:string,
    date:string,
    height:string,
}

const NewsCard = ({ date, height, image, title }: Props) => {
    const cardBackground ={
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
    </div>
  )
}

export default NewsCard