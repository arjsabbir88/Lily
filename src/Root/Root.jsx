import React, { useEffect, useState } from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
import { Outlet, useLocation, useNavigation } from 'react-router'
import { Footer } from '../Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import { Loading } from '../Components/Loading/Loading'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Root = () => {

useEffect(() => {
  AOS.init({ duration: 300 });
}, []);

  const {state}= useNavigation()
  

  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);
  useEffect(() => {
    if (location.pathname === "/error") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);


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
        {
          showFooter && <NavBar/>
        }
        {state=="loading"? <Loading/> : <Outlet/>}
        {
          showFooter && <Footer></Footer>
        }
    </div>
  )
}

