import React from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router'
import { Footer } from '../Components/Footer/Footer'

export const Root = () => {
  return (
    <div className='max-w-11/12 mx-auto'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
