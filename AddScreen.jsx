import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';
function AddScreen({setdata,data}) {
  //Hooks
  
  const navigate= useNavigate();
  const[check,SetCheck]= useState(1);
  const [datas,setdatas]=useState({})
  // Components
  function addIncome(data){
    return (
      <div style={{width:"100%",background:"linear-gradient(to right,white,black)"
        ,marginTop:"20px",padding:"10px",borderRadius:"20px"
      }}>
       <p style={{textAlign:"center",color:"yellow",fontSize:"23px",marginTop:"20px"}}>{data.title}</p>

       <input style={{
        padding:"10px",
        width:"70%",
        border:"none",
        borderRadius:"10px",
        fontSize:"15px",
        marginTop:"20px",
        marginLeft:"10%",
       }}  type="text" placeholder='Add money' name='money'
        onChange={(e)=>e.target.value!=""?setdatas({...datas,[e.target.name]:e.target.value}):alert("fill all details")
       }
       /><br />
       <input style={{
         padding:"10px",
        width:"70%",
        border:"none",
        borderRadius:"10px",
        fontSize:"15px",
        marginTop:"20px",
        marginLeft:"10%",
       }} type="text" placeholder={check==1?'category- (i.e) monthly salary':`category- (i.e) food,petrol,shopping ....`} name='category'
        onChange={(e)=>e.target.value!=""?setdatas({...datas,[e.target.name]:e.target.value}):alert("fill all the details")
       }/> <br />
       <input style={{
         padding:"10px",
        width:"70%",
        border:"none",
        borderRadius:"10px",
        fontSize:"15px",
        marginTop:"20px",
        marginLeft:"10%",
       }} type="date" placeholder='add date (i.e- 01/01/2024)' 
       onChange={(e)=>e.target.value!=""?setdatas({...datas,[e.target.name]:e.target.value}):alert("fill all the details")
       }
      name='date' /> <br />

        <input style={{
           padding:"10px",
        width:"70%",
        border:"none",
        borderRadius:"10px",
        fontSize:"15px",
        marginTop:"20px",
        marginLeft:"10%",
        }}type="text" placeholder='add description' name='description'
         onChange={(e)=>e.target.value !=""?setdatas({...datas,[e.target.name]:e.target.value}):alert("fill all the detail!")
       }/><br />



        <div style={{width:"100%",display:"flex",justifyContent:"center",
          alignItems:"center",gap:"20px",marginBottom:"15px"
          ,marginTop:"40px",}}>
          <button className='add-btn' onClick={()=>handleAdd()}>Add {data.type}</button>
          <button className='add-btn' onClick={()=>navigate("/")}>Cancel</button>
        </div>

      </div>
    )
  }
  // functions for handling
  function handleOne(){
    SetCheck(1);
  }
   function handleTwo(){
    SetCheck(2);
  }
  function handleAdd(){
    
    if(!datas.money){
      alert("fil all details")
      return
    }
    if(!datas.category){
      alert("fill all details");
      return
    }
    if(!datas.date){
      alert("fill all details");
      return
    }
    if(!datas.description){
      alert("fill all details");
      return
    }
    setdata(data.push({...datas,id:(data.length+1),type:(check==1?"Income":"Expense")}));
    console.log(data);
    
    navigate("/")
  }
  return (
    <div style={{width:"100vw",height:"100vh",
      display:"flex",
    justifyContent:"center",alignItems:"center"}}>
      <div className='Addscreen-container'>
          <div className="Addscreen-sub-container-1">
              <p className={check==1?'addScreen-top-1':"addScreen-top-2"} onClick={()=>handleOne()}>Add Income</p>
              <p className={check==2?'addScreen-top-1':"addScreen-top-2"} onClick={()=>handleTwo()}>Add Expence</p>
          </div>

          {check==1 && addIncome({title:"Add money and be wealthy",type:"Income"})}
          {check==2 && addIncome({title:"Save money && save life",type:"Expense"})}
      </div>
    </div>
  )
}

export default AddScreen;