import React from 'react'
import NewsCard from '../Helper/NewsCard'

const TrendingNews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* heading */}
        <h1 className='heading'>New Trends</h1>
        {/* cards div */}
        <div className='pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
            {/* Card 1 */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <NewsCard 
                image="/n1.jpg" 
                date='Oct 27, 2024' 
                title='United Play Liverpool on the new year opener?' 
                height='h-[300px]'
                />
            </div>
            {/* Card 2 */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <NewsCard 
                image="/n2.png" 
                date='Oct 27, 2024' 
                title='Arsenal scores from corners again' 
                height='h-[300px]'
                />
            </div>
            {/* Card 3 */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <NewsCard 
                image="/n3.png" 
                date='Oct 27, 2024' 
                title='Ipswich beat Chelsea' 
                height='h-[300px]'
                />
            </div>
            {/* Card 4 */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="600">
                <NewsCard 
                image="/n4.png" 
                date='Oct 27, 2024' 
                title='Barcelona unable to register Dani Olmo' 
                height='h-[300px]'
                />
            </div>
        </div>
    </div>
  )
}

export default TrendingNews