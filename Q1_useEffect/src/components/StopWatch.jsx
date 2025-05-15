import { useEffect, useState } from "react";

function StopWatch(){
    const[time, setTime]=useState(0);
    const [isRunning, setIsRunning]=useState(false)

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>{
                setTime((prevTime)=>prevTime+1)
            },1000);
        }
        return ()=>clearInterval(interval)
    },[isRunning])

    const start=()=>setIsRunning(true);
    const pause=()=>setIsRunning(false);
    const reset=()=>{
        setIsRunning(false);
        setTime(0);
    }

    return(
        <>
        <h2>Stop Watch</h2>
        <p>Elaped Time:{time}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default StopWatch;