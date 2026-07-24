import React from 'react'

function Button({fn}) {
  return (
      <>
      <button onClick={()=>{
        fn((prev)=>prev+1);
      }}>INCREMENT</button>
      </>
    // fn => setCount from App.jsx

  )
}

export default Button