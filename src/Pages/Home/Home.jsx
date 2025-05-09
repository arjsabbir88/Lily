import React from 'react'
import SwiperContainer from '../../swiperContainer/SwiperContaienr'
import { BookContainer } from '../../Components/BooksContainers/BookContainer'
import { ForMarquee } from '../../Components/ForMarquee/ForMarquee'

export const Home = () => {
  
  return (
    <div>
      <SwiperContainer/>
      <BookContainer/>
      <div>
        <ForMarquee></ForMarquee>
      </div>
    </div>
  )
}
