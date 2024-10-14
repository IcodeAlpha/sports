import React from 'react'
import Hero from './Hero/Hero'
import TrendingNews from './TrendingNews/TrendingNews'
import LatestNews from './LatestNews/LatestNews'
import MatchHighlights from './MatchHighlights/MatchHighlights'
import LatestPost from './LatestPost/LatestPost'

const Home = () => {
  return (
    <div>
        <Hero />
        <TrendingNews />
        <LatestNews />
        <MatchHighlights />
        <LatestPost />
    </div>
  )
}

export default Home