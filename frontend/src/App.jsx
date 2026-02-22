import { RouterProvider } from "react-router-dom";
import router from "./Approuter";
import'./feature/Shared/global.scss'

import React from 'react'

const App = () => {

  return (
    <>
    
    <RouterProvider router={router}/>
    </>
     
  )
}

export default App