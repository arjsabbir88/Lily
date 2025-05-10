import React from 'react'
import SwiperContainer from '../../swiperContainer/SwiperContaienr'
import { BookContainer } from '../../Components/BooksContainers/BookContainer'
import { ForMarquee } from '../../Components/ForMarquee/ForMarquee'
import { Blogs } from '../Blogs/Blogs'
import { BlogsContainer } from '../Blogs/BlogsContainer'
import { Frequently } from '../../Components/FrequentlyQuestion/Frequently'

export const Home = () => {

  return (
    <div>
      <SwiperContainer/>
      <BookContainer/>
      <div>
        <ForMarquee></ForMarquee>
      </div>
      <div>
      <BlogsContainer/>
      </div>
      <div className='my-10'>
        <Frequently/>
      </div>
    </div>
  )
}
