import { createBrowserRouter } from "react-router";
import { Root } from "../Root/Root";
import { Home } from "../Pages/Home/Home";
import { Contact } from "../Pages/Contract/Contact";
import { Profile } from "../Pages/Profile/Profile";
import { Stories } from "../Pages/Stories/Stories";
import { Subscription } from "../Pages/Subscription/Subscription";

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: ()=>fetch("/bookHouse.json")
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
            }
        ]
    }
])