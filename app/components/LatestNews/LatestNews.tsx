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
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" className='col-span-3'>
                <NewsCard image='/n1.jpg' date='0ct 27, 2024' title='Alpha Brace secure Jubilee all 3 points' height='h-[400px]' />
            </div>
            {/* small card */}
            <div className='col-span-2'>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <SmallNewsCard image='/n2.png' date='0ct 27, 2024' title='Baleba Red Card  '/>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400" className='mt-[1.4rem] mb-[1.4rem]'>
                    <SmallNewsCard image='/n3.png' date='0ct 26, 2024' title='Barcelona demolish Real Madrid with La Masia graduates at the Bernabou'/>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="600">
                    <SmallNewsCard image='/n4.png' date='0ct 27, 2024' title='Ten Hag under more pressure after loss away at WestHam'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews