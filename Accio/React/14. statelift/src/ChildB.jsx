import React, { useState } from 'react'

function ChildB({val, fn}) {
    const [count, setCount] = useState(0);
  return (
    <>
    <div>B: {val}</div>
    <button onClick={fn}>btn B</button>
    </>
  )
}

export default ChildB