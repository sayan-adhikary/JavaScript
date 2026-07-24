import React from 'react'

function Input({val, fn}) {
  return (
    <>
    <input type="text" value = {val} onChange={(e)=>{
        fn(e.target.value)
        console.log("btn presses")
        }}/>
    </>
  )
}

export default Input