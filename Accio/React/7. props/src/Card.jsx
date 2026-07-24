import React from 'react'

function Card({name, age, add}) {
  return (
    <>
    <h1>Hi, I'm {name}</h1>
    <h2>I'm Learning React Props</h2>
    <h2>My age is {age}</h2>
    {add && <h1>Welcome back! {add?.city}</h1>}
    </>
  )
}

export default Card