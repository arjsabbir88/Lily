import React from 'react'
import ReviewCard from '../../Components/ForMarquee/ReviewCards'
import { ReviewCard2 } from '../../Components/ForMarquee/ReviewCard2'
import { ReviewCard3 } from '../../Components/ForMarquee/ReviewCard3'
import { ReviewCard4 } from '../../Components/ForMarquee/ReviewCard4'

export const Stories = () => {
  return (
    <div className='mx-auto grid grid-cols-2 gap-6 my-6'>
      <ReviewCard/>
      <ReviewCard2/>
      <ReviewCard3/>
      <ReviewCard4/>
    </div>
  )
}
