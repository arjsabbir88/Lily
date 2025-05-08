import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { BannerSwiper } from "./BannerSwiper";

export const Subscription = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const exit = data.find((d) => d.id === parseInt(id));

  const {
    name,
    thumbnail,
    banner,
    frequency,
    price,
    description,
    tech_category,
    features,
    // subscription_benefits,
    ratings,
    number_of_reviews,
  } = exit;

  return (
    <>
      <div className="my-10">
        <BannerSwiper banner={banner}></BannerSwiper>
      </div>

      <div className="max-w-8/12 mx-auto">
        <h1 className="my-10 text-center text-2xl font-bold">
          Subscription Details
        </h1>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img className="w-full h-[300px]" src={thumbnail} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between my-4 border-y border-green-600 py-3 border-dashed">
              <div>
                <h2 className="card-title">{name}</h2>
                <h3 className="text-xs">
                  tk-{price}/{frequency}
                </h3>
              </div>
              <h3 className="flex justify-center items-center px-3 rounded-full bg-green-700 text-lg">
                {tech_category}
              </h3>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-400">Features:</p>
              {features.map((feature, index) => (
                <li key={index} className="text-lg">
                  {feature}
                </li>
              ))}
            </div>
            <div className="py-3 border-y border-green-700 border-dashed">
            <p>{description}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg font-bold">Rating: {ratings}</p>
              <p className="text-lg text-end font-bold">
                Number of Reviews : {number_of_reviews}
              </p>
            </div>
            <div className="card-actions">
              <Link
                to={`/view-subscription/${id}`}
                className="btn bg-green-600 w-full text-xl"
              >
                Subscriptions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
