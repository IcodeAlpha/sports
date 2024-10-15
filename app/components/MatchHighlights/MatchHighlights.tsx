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
                title="TEN HAG STAYS TOP, UNITED 5 - ARSENAL 0"
                date='21 March 2024'
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <HighlightsCard 
                image="/h2.png" 
                title="GAVI AND YAMAL SHOW IN CATALONIA, Barca 4 - SEVILLA 0"
                date='22 March 2024'
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <HighlightsCard 
                image="/h3.png" 
                title="GREENWOOD MASTERCLASS IN MARSEILLE, MARSEILLE 5 - PSG 1"
                date='23 March 2024'
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                <HighlightsCard 
                image="/h4.png" 
                title="McTOMINAY SCORES AGAIN AS NAPOLI KEEPS WINNING, NAPOLI 3 - JUVENTUS 0"
                date='24 March 2024'
                />
            </div>
        </div>
    </div>
  )
}

export default MatchHighlights