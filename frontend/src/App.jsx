import { RouterProvider } from "react-router-dom";
import router from "./Approuter";
import './feature/auth//auth.context'
import'./feature/Shared/global.scss'
import {AuthProvider}from './feature/auth/auth.context'

import React from 'react'

const App = () => {

  return (
    <AuthProvider>
    <RouterProvider router={router}/>
   </AuthProvider>
  )
}

export default App