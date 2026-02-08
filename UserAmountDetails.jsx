import React, { useState } from 'react'
import TotalAmount from '../reusableComponents/TotalAmount'

function UserAmountDetails({data}) {
const [total,setTotal]=useState( ()=>{
   return data.reduce((acc,e)=> acc+(e.type=="Income"?Number(e.money):0),0)
})
const [spending,setSpending]=useState( ()=>{
   return data.reduce((acc,e)=> acc+(e.type=="Expense"?Number(e.money):0),0)
})


  return (
    <div style={{width:"80%",height:"80%",
        borderRadius:"30px",display:"flex",
        gap:"20px"
    }}>
        <TotalAmount type={"Total Amount"} amount={total}/>
        <TotalAmount type={"total spending"} amount={spending}/>
        <TotalAmount type={"current amount"} amount={total-spending}/>
    </div>
  )
}

export default UserAmountDetails