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
    total_number_of_book,
    ratings,
    number_of_reviews,
  } = exit;

  const handleSubmitReview=()=>{
    console.log("clicked")
    const Container = document.getElementById("reviewContainer");
    const textArea = document.getElementById("textArea").value;
    const p = document.createElement("p");
    Container.innerHTML = "";
    p.innerText = textArea;
    Container.appendChild(p)
  }

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
            <h3 className="mb-5 text-green-600 text-center text-xl">Total Number of Books {total_number_of_book}</h3>
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
            <div className="my-6"> 
            <textarea id="textArea" type="text" placeholder="Write Your review" className="textarea textarea-success resize-none w-8/12 text-lg"></textarea>
            </div>
            <div className="card-actions">
              <button onClick={handleSubmitReview}
                className="btn bg-green-600 w-full text-xl"
              >
                Submit Review
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Reviews</h1>
              <div id="reviewContainer">
                <p  className="text-xs">No Review Yet</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
