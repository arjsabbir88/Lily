import { createBrowserRouter } from "react-router";
import { Root } from "../Root/Root";
import { Home } from "../Pages/Home/Home";
import { Contact } from "../Pages/Contract/Contact";
import { Profile } from "../Pages/Profile/Profile";
import { Stories } from "../Pages/Stories/Stories";
import { Subscription } from "../Pages/Subscription/Subscription";
import { Blogs } from "../Pages/Blogs/Blogs";

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: async ()=>{
                    // fetch bookHOuse data
                    const bookHouseResponse =await fetch("/bookHouse.json");
                    if(!bookHouseResponse.ok){
                        throw new Error("Failed to fetch bookHouseResponse.json");
                    }
                    const bookHouseData = await bookHouseResponse.json();

                    // fetch blogs data
                    const blogsResponse =await fetch("/blogs.json");
                    if(!blogsResponse.ok){
                        throw new Error("Failed to fetch blogsResponse.json");
                    }
                    const blogsData = await blogsResponse.json();

                    return{
                        bookHouseData: bookHouseData,
                        blogsData: blogsData
                    }
                }
            },
            {
                path: '/contact',
                Component: Contact,
            },
            {
                path: '/profile',
                Component: Profile
            },
            {
                path: '/stories',
                Component: Stories
            },
            {
                path:'/view-subscription/:id',
                Component: Subscription,
                loader: ()=>fetch("/bookHouse.json")
            },
            {
                path: '/blogs',
                Component: Blogs,
                loader: ()=>fetch("/blogs.json")

            }
        ]
    }
])