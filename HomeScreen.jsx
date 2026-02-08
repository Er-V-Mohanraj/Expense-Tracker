import React from 'react'
import { useEffect, useState } from 'react'
import Header from "./Header";
import UserAmountDetails from "./UserAmountDetails";
import MainContainer from "./MainContainer";
import "../App.css"
function HomeScreen({data,setdata}) {    
  return (
    <>
     <Header />
    <div style={{width:"100%",display:"flex",
      justifyContent:"center",alignItems:"center"
    }}>
      <UserAmountDetails data={data}/>
    </div>
  
    <div className="main-content">
        <MainContainer data={data}/>
      </div>
      </>
  )
}

export default HomeScreen