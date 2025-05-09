import React from 'react'
import { useLoaderData } from 'react-router'
import { Blog } from './Blog';

export const Blogs = () => {
    const blogsData = useLoaderData();
    
  return (


    <div className='my-5'>
        <div className='text-center flex flex-col items-center my-6'>
            <h1 className='text-2xl mb-4'>Our Blogs</h1>
            <p className='text-green-800'>Explore the world of books with our arjBookHouse blog, featuring captivating stories, reviews, and interesting facts. <br/>Dive into discussions on various book genres, author insights, and reading tips—start reading today!</p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
            {
                blogsData.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    </div>

  )
}
