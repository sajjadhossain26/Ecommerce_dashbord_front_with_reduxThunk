import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux';
import { loggedInUser } from './features/auth/authApiSlice';
import { getAllpermission } from './features/user/userApiSlice';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem("user")){

      dispatch(loggedInUser())
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllpermission())
  },[])

  return (
    <>
 <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover={false}
    theme="light"
    />
     <RouterProvider router={router}/>
    </>
  )
}

export default App
