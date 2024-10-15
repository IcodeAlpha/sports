'use client'

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import TrendingNews from './TrendingNews/TrendingNews'
import LatestNews from './LatestNews/LatestNews'
import MatchHighlights from './MatchHighlights/MatchHighlights'
import LatestPost from './LatestPost/LatestPost'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {

  useEffect(()=>{

    const initAos = async()=>{
      await import ('aos');
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:'top-bottom'
      });
    };

    initAos()


  },[])
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