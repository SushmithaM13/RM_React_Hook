import { useEffect } from "react";
import { useState } from "react";
function RandomNumberGenerator (){
    const [randomval, setrandomval]=useState(0);

    useEffect(()=>{
        console.log(`State updated ${randomval}`);
    },[randomval]);

    const GenerateRNumber=()=>{
        const newval=Math.floor(Math.random()*100);
        setrandomval(newval);
    }
    return(
        <>
        <h1>Random Number Generator</h1>
        <p>Current Value:{randomval}</p>
        <button onClick={GenerateRNumber}>Random Value</button>
        </>
    )

}

export default RandomNumberGenerator;

