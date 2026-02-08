import React from 'react'

function TotalAmount({type,amount}) {
  return (
    <div className='amount-card'>
        <h2>{type}</h2>
        <p>₹.{" "+amount} </p>
    </div>
  )
}

export default TotalAmount