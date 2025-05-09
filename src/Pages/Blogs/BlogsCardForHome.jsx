import React from 'react'

export const BlogsCardForHome = ({data}) => {
    const {title,author,genre,description,imageUrl} = data;
  return (
    <div className="mx-auto">
        <div className="card bg-base-100 shadow-xl hover:shadow-xl/30 cursor-pointer">
          <figure>
            <img className="w-full h-[300px]" src={imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between my-4 border-y border-green-600 py-3 border-dashed">
              <div>
                <h2 className="card-title">{title}</h2>
                <h3 className="text-xs">
                  {author}
                </h3>
              </div>
              <h3 className="flex justify-center items-center px-3 rounded-full bg-green-700 text-lg">
                {genre}
              </h3>
            </div>
              
            <div>
            <p>{description}</p>
            </div>
            </div>
          </div>
        </div>
  )
}
