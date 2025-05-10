import React, { use } from 'react'
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

export const Cards = ({card}) => {
    const {id,name,thumbnail,description, tech_category,price,frequency}= card;

    const {user} = use(AuthContext);

  return (
    <div className="card bg-base-100 w-96 shadow-sm shadow-xl hover:shadow-xl/30 cursor-pointer">
  <figure>
    <img className='w-full h-[300px]'
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className='flex justify-between my-4 border-y border-green-600 py-3 border-dashed'>
        <h3 className='px-3 rounded-full bg-green-700 text-lg'>{tech_category}</h3>
        <h3 className='text-lg'>tk-{price}/{frequency}</h3>
    </div>
    <div className="card-actions">
      <Link to={user?`/view-subscription/${id}`:'/auth/login'} className="btn bg-green-600 w-full text-xl">Subscriptions</Link>
    </div>
  </div>
</div>
  )
}
