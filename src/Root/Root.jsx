import React from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router'
import { Footer } from '../Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

export const Root = () => {
  return (
    <div className='max-w-11/12 mx-auto'>

      <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
