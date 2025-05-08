import React from 'react'
import { useLoaderData } from 'react-router'
import { Cards } from '../../Components/Cards/Cards'

export const BookContainer = () => {
    const data = useLoaderData()
  return (
    <div>
        <div className='my-10'>
        <h1 className='text-center text-3xl font-bold'>Find Your Choice</h1>
        <div className='my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            data.map(card => <Cards key={card.id} card={card}></Cards>)
          }
        </div>
      </div>
    </div>
  )
}
