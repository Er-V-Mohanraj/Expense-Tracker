import React from 'react'

function Header() {
  return (
    <div className='header-content'>
        <h1><span>M</span>oney Flow</h1>
        <p>Manage your <span style={{color:"green",fontSize:"20px"}}>Incomimg</span> and <span style={{color:"yellow",fontSize:"20px"}}>Outgoing</span></p>
    </div>
  )
}

export default Header