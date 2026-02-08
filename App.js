import React, { useEffect, useState } from 'react'
import "./App.css"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomeScreen from './components/HomeScreen';
import AddScreen from './components/AddScreen';


function App() {



  const [userdatas,setuserdatas]=useState([
    {
      id:1,
      money:20000,
      category:"monthly-salary",
      type:"Income",
      date:"2026-02-22",
      description:"abcdefgh"
    }
  ])

    const router = new createBrowserRouter([
    {
      path:"/",
      element:<HomeScreen data={userdatas} />
    },{
      path:"/add",
      element:<AddScreen data={userdatas} setdata={setuserdatas}n/>
    }
])
 return(
  <>
  
    <RouterProvider router={router}/>
  </>
 )
}

export default App