import React from 'react'
import HighlightsCard from './HighlightsCard'

const MatchHighlights = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* Heading */}
        <h1 className='heading'>MatchHighlights</h1>
        <div className='mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]'>
            {/* Cards */}
            <div>
                <HighlightsCard 
                image="/h1.png" 
                title="TEN HAG STAYS TOP, UNITED 5 - ARSENAL 0"
                date='21 March 2024'
                />
            </div>
            <div>
                <HighlightsCard 
                image="/h2.png" 
                title="TEN HAG STAYS TOP, UNITED 5 - ARSENAL 0"
                date='22 March 2024'
                />
            </div>
            <div>
                <HighlightsCard 
                image="/h3.png" 
                title="TEN HAG STAYS TOP, UNITED 5 - ARSENAL 0"
                date='23 March 2024'
                />
            </div>
            <div>
                <HighlightsCard 
                image="/h4.png" 
                title="TEN HAG STAYS TOP, UNITED 5 - ARSENAL 0"
                date='24 March 2024'
                />
            </div>
        </div>
    </div>
  )
}

export default MatchHighlights