'use client'

import React from 'react'
import PostCard from '@/components/postCard/PostCard'
const BlogPage = () => {
  return (
    <div className='flex mx-[50px] my-[100px] flex-col flex-wrap gap-[20px]'>
      <div className='w-full max-w-screen-md:w-full max-w-[1280px]:w-[45%]'>
        <PostCard />
      </div>
      <div className='w-full max-w-screen-md:w-full max-w-[1280px]:w-[45%]'>
        <PostCard />
      </div>
      <div className='w-full max-w-screen-md:w-full max-w-[1280px]:w-[45%]'>
        <PostCard />
      </div>
      <div className='w-full max-w-screen-md:w-full max-w-[1280px]:w-[45%]'>
        <PostCard />
      </div>
      
        
        
    </div>
  )
}

export default BlogPage