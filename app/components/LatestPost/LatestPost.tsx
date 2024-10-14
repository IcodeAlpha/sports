import React from 'react'
import PostCard from './PostCard'

const LatestPost = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* Heading */}
        <h1 className='heading'>Latest Post</h1>
        <div className='w-[80%] mx-auto mt-[3rem]'>
            {/* PostCard */}
            <div>
                <PostCard 
                    title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION" 
                    image='/n1.jpg' 
                    date='21 March 2024' 
                />
            </div>
            <div>
                <PostCard 
                    title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION" 
                    image='/n2.png' 
                    date='22 March 2024' 
                />
            </div>
            <div>
                <PostCard 
                    title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION" 
                    image='/n3.png' 
                    date='23 March 2024' 
                />
            </div>
            <div>
                <PostCard 
                    title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION" 
                    image='/n4.png' 
                    date='24 March 2024' 
                />
            </div>
        </div>
    </div>
  )
}

export default LatestPost