import React, {useState} from 'react'

function ChildA({val, fn}) {
    const [count, setCount] = useState(0);
    return (
        <>
        <div>A: {val}</div>
        <button onClick={fn}>btn A</button>
        </>
    )
}

export default ChildA