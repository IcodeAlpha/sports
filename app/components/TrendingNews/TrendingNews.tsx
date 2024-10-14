import React from 'react'
import NewsCard from '../Helper/NewsCard'

const TrendingNews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* heading */}
        <h1 className='heading'>Trending News</h1>
        {/* cards div */}
        <div className='pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
            {/* Card 1 */}
            <div>
                <NewsCard 
                image="/n1.jpg" 
                date='March 21, 2024' 
                title='Is Messi ready for Argentina?' 
                height='h-[300px]'
                />
            </div>
            {/* Card 2 */}
            <div>
                <NewsCard 
                image="/n2.png" 
                date='March 22, 2024' 
                title='Is Messi ready for Argentina?' 
                height='h-[300px]'
                />
            </div>
            {/* Card 3 */}
            <div>
                <NewsCard 
                image="/n3.png" 
                date='March 23, 2024' 
                title='Is Messi ready for Argentina?' 
                height='h-[300px]'
                />
            </div>
            {/* Card 4 */}
            <div>
                <NewsCard 
                image="/n4.png" 
                date='March 24, 2024' 
                title='Is Messi ready for Argentina?' 
                height='h-[300px]'
                />
            </div>
        </div>
    </div>
  )
}

export default TrendingNews