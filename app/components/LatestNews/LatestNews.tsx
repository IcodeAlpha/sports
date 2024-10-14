import React from 'react'
import NewsCard from '../Helper/NewsCard'
import SmallNewsCard from '../Helper/SmallNewsCard'

const LatestNews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* Heading */}
        <h1 className='heading'>Latest News</h1>
        <div className='w-[80%] mx-auto pt-[4rem] grid grid-cols-1 lg:grid-cols-5 gap-[2rem]'>
            {/* Big Card */}
            <div className='col-span-3'>
                <NewsCard image='/n1.jpg' date='March 23, 2024' title='Is Messi Ready for Argentina' height='h-[400px]' />
            </div>
            {/* small card */}
            <div className='col-span-2'>
                <div>
                    <SmallNewsCard image='/n2.png' date='March 24, 2024' title='Is Messi Ready for Argentina'/>
                </div>
                <div className='mt-[1.4rem] mb-[1.4rem]'>
                    <SmallNewsCard image='/n3.png' date='March 25, 2024' title='Is Messi Ready for Argentina'/>
                </div>
                <div>
                    <SmallNewsCard image='/n4.png' date='March 26, 2024' title='Is Messi Ready for Argentina'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews