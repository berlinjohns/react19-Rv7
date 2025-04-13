import { useEffect, useState } from 'react'



const EfxComponent=()=>{
  const[seconds,setSeconds]=useState(0);
    useEffect(()=>{
      console.log("Rerendered");
      const interval = setInterval(()=>{
        setSeconds((prevSeconds)=>prevSeconds+1);
        
      },1000);
      //clean up for timers
      return ()=>{
         clearInterval(interval);
        console.log("Interval cleared");
       
      }
    },[])

    return <div>
      <p>Second elapsed:{seconds}</p>
    </div>
};


export default EfxComponent;