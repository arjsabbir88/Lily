import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "../Root/Root";
import { Home } from "../Pages/Home/Home";
import { Contact } from "../Pages/Contract/Contact";
import { Profile } from "../Pages/Profile/Profile";
import { Stories } from "../Pages/Stories/Stories";
import { Subscription } from "../Pages/Subscription/Subscription";
import { Blogs } from "../Pages/Blogs/Blogs";
import { Auth } from "../Root/Auth";
import { Login } from "../Pages/Auth/Login";
import { Register } from "../Pages/Auth/Register";
import { Loading } from "../Components/Loading/Loading";
import { Error } from "../Pages/Error/Error";
import { EditProfile } from "../Pages/Profile/EditProfile";
import { ForgotPass } from "../Pages/ForgotPass/ForgotPass";

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
                    
                },
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/auth/login',
                Component:Login
            },
            {
                path: '/auth/register',
                Component: Register
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
                loader: ()=>fetch("/bookHouse.json"),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/blogs',
                Component: Blogs,
                loader: ()=>fetch("/blogs.json"),
                hydrateFallbackElement: <Loading />

            },
            {
                path:'/forgot-Password',
                Component: ForgotPass
            },
            {
                path:'/edit-profile',
                Component: EditProfile
            },
            {
                path:'/*',
                element: <Navigate to="/error" replace />
            },
            {
                path: '/error',
                Component: Error
            }
        ]
    }
])