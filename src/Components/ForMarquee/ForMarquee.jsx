import React from 'react'
import Marquee from 'react-fast-marquee'
import ReviewCard from './ReviewCards'
import { ReviewCard2 } from './ReviewCard2'
import { ReviewCard3 } from './ReviewCard3'
import { ReviewCard4 } from './ReviewCard4'

export const ForMarquee = () => {
  return (
    <div>
        <h1 className='text-center text-2xl text-green-600 font-bold my-10'>Our Success Story</h1>
        <Marquee gradient pauseOnHover className='flex cursor-pointer'>
            <ReviewCard/>
            <ReviewCard2/>
            <ReviewCard3/>
            <ReviewCard4/>
        </Marquee>
    </div>
  )
}
