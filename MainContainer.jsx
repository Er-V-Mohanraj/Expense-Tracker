import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css";
function MainContainer({data}) {
    
// hooks
const [income,setIncome]=useState( data.filter(e => e.type==="Income"));
const [spending,setSpending]=useState( data.filter(e => e.type==="Expense"));
// console.log(data[0].type);

    const [chage,setChange]=useState(1)
    const navigate = useNavigate()
// component functions
    function AddMainContentHeader(head,ind){
    return(
        <div style={ind==chage?{backgroundColor:"white",width:"100px",height:"40px",display:"flex",
            justifyContent:"center",alignItems:"center",fontSize:"15px",
            borderRadius:"10px"
        }:{backgroundColor:"black",width:"100px",height:"40px",display:"flex",
            justifyContent:"center",alignItems:"center",color:"white",
            borderRadius:"10px",fontSize:"15px"}} onClick={()=>setChange(ind)}>
         <h3>{head}</h3>
        </div>
    )
}

function card(obj){
    return (<div className="amount-details-card" key={obj.id}>
         <div style={{width:"100%",padding:"10px",marginLeft:"40px"}}>
             <p style={{fontSize:"25px"}}>{obj.category} </p>
         <p style={{marginTop:"4px"}}>{obj.type}</p>
         <p style={{marginTop:"4px"}}> <span style={{fontSize:"20px"}}>₹.</span>{obj.money} | {obj.date}</p>
         </div>
        <div style={{marginTop:"20px",marginRight:"40px",fontSize:"25px"}}>
            <p>{obj.type=="Income"?"📈":"📉"}</p>
        </div>
          
    </div>)
}

function handleClick(){
    navigate("/add");
}
  return (
    <div className='main-container'>
        <div style={{display:'flex',width:"100%",justifyContent:"space-around",cursor:"pointer"
            
        }}>
             <div style={{display:"flex",width:"35%",justifyContent:"space-between"}}>
                  {AddMainContentHeader("All",1)}
                {AddMainContentHeader("Spendings",2)}
                {AddMainContentHeader("Income",3)}
             </div>
             <div style={{width:"40%",display:"flex",justifyContent:"flex-end"}}>
                <button style={{width:"40%",marginRight:"30px"
                    ,border:"none",background:"linear-gradient(to right,black,white)",color:"white",cursor:"pointer",
                    borderRadius:"20px"
                }} onClick={()=>handleClick()}>ADD</button>
             </div>
           
      </div>
      <div className="showDetails">
       {chage==1 &&data.map((ele)=> card(ele))}
       {chage==2 &&spending.map((ele)=> card(ele))}
       {chage==3 &&income.map((ele)=> card(ele))}
      </div>
    </div>
  )
}


export default MainContainer;