import React, { useState, useEffect } from 'react'

function Chat() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Inside useEffect cb");

        return ()=>{
            console.log("Clean up");
        }

    }, [count]);

  return (
    <div style={{backgroundColor:"green", margin:"1rem", padding:"1rem"}}>
        <h1>Chat Component</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Change Count</button>
    </div>
  )
}

export default Chat