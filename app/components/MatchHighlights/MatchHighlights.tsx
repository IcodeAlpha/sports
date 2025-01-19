import React from 'react'
import HighlightsCard from './HighlightsCard'

const MatchHighlights = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* Heading */}
        <h1 className='heading'>MatchHighlights</h1>
        <div className='mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]'>
            {/* Cards */}
            <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                <HighlightsCard 
                image="/h1.png" 
                title="Amorim's Reds face Brighton at Old Trafford"
                date='27 Oct 2024'
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <HighlightsCard 
                image="/h2.png" 
                title="A Real Madrid win takes them at the summit of La Liga"
                date='27 Oct 2024'
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <HighlightsCard 
                image="/h3.png" 
                title="SERIE A: Inter and Juve play out to a 8 goal thriller for a point"
                date='27 Oct 2024'
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                <HighlightsCard 
                image="/h4.png" 
                title="KABARE LEAGUE: Jubilee, Riakithiga wins all 3 points on opening day at Mugumo"
                date='27 Oct 2024'
                />
            </div>
        </div>
    </div>
  )
}

export default MatchHighlights