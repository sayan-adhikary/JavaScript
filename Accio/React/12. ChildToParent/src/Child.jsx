import React from 'react'

function Child({fn}) {
  return (
    <button onClick={()=>fn("Message from Child")}>Click to send Message to Parent</button>
  )
}

export default Child