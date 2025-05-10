import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import { BlogsCardForHome } from "./BlogsCardForHome";
import { AuthContext } from "../../provider/AuthProvider";
import { Loading } from "../../Components/Loading/Loading";

export const BlogsContainer = () => {
  const { blogsData } = useLoaderData();
  const sliceData = blogsData.slice(0, 3);

  const {user} = use(AuthContext);

  return (
    <div>
      <div>
        <h1 className="my-10 text-center text-2xl font-bold">Our Blogs</h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {sliceData.map((data) => (
          <BlogsCardForHome key={data.id} data={data} />
        ))}
      </div>
      <div className="w-full flex justify-center my-5">
        <Link
          to={user?"/blogs":"/auth/login"}
          className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">See All Blogs</span>
        </Link>
      </div>
    </div>
  );
};
