import { useEffect, useState } from 'react'

function App() {
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [isRunning, setRunnnig] = useState(false);
  const [isAdjust, setAdjust] = useState(false);
  const [formMin, setMin] = useState(0);
  const [formSec, setSec] = useState(0);

  let minutes = Math.floor(totalSeconds/60)
  let seconds = totalSeconds%60

  // let a = 10;

  function handleSubmit(e){
    e.preventDefault();
    setTotalSeconds(formMin*60 + formSec); 
  }

  useEffect(()=>{

    if(isRunning == false){
      return;
    }

    const id = setInterval(()=>{
      setTotalSeconds((prev)=>{
        return prev+1
      });
    },1000);


    // clean up
    return ()=>{
      clearInterval(id);
    }

  }, [isRunning])


  return (
    <div>
      {/* timer */}
      {/* {/* <h1>{a}</h1> */}
      {/* <button onClick={()=>{
        setTotalSeconds(totalSeconds+30)
      }}>Click</button> */}
      <div>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>


      <div>
        <button onClick={()=>setRunnnig((prev)=>!prev)}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={()=>{
          setRunnnig(false);
          setTotalSeconds(0);
        }}>Reset</button>
        <button onClick={()=>{
          setRunnnig(false);
          setAdjust((prev)=>!prev);
        }}>Adjust</button>
      </div>

      {isAdjust && (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='min' value={formMin} onChange={(e)=>setMin(Number(e.target.value))}/>
          <input type="text" placeholder='sec' value={formSec} onChange={(e)=>setSec(Number(e.target.value))}/>
          <button>Set</button>
        </form>
      )}

    </div>
  )
  
}

export default App
