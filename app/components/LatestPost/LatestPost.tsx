import React from 'react'
import PostCard from './PostCard'

const LatestPost = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* Heading */}
        <h1 className='heading'>Latest Post</h1>
        <div className='w-[80%] mx-auto mt-[3rem]'>
            {/* PostCard */}
            <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                <PostCard 
                    title="THE WORLD CUP: WHAT TO EXPECT FROM DEBUTANTS KENYA" 
                    image='/n1.jpg' 
                    date='21 March 2024' 
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <PostCard 
                    title="THE WORLD CUP: WILL KLOPP DELIVER GERMANY THE TITLE?" 
                    image='/n2.png' 
                    date='22 March 2024' 
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <PostCard 
                    title="THE WORLD CUP: EARLY EXIT LOOMING FOR FRANCE?" 
                    image='/n3.png' 
                    date='23 March 2024' 
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                <PostCard 
                    title="THE WORLD CUP: WILL MESSI WIN IT BACK TO BACK?" 
                    image='/n4.png' 
                    date='24 March 2024' 
                />
            </div>
        </div>
    </div>
  )
}

export default LatestPost