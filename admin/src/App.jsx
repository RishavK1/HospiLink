import React, { useContext } from 'react'
import Login from './pages/Login'
// import { ToastContainer, toast } from "react-toastify";
import { Toaster, toast } from "react-hot-toast";
import { AdminContext } from './context/AdminContext';

const {aToken} = useContext(AdminContext)


const App = () => {
  return aToken ? (
    <div >
      <Toaster />
    </div>
  ) : (
      <>
      <Login />
      <Toaster />
      </>
  )
}

export default App