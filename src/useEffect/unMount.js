// 3. Cleanup (e.g., unsubscribe) 
// componet will unmount ---in useEffect will use return
// timeouts,subscriptions,event listeners and other effects no longer needed

import React, { useEffect, useState } from "react";

const WillUnmount=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("run useEffect", count);
        return()=>{
            console.log("clean up", count)
        }
    },[count])
    return(
        <>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </>
    )
}
export default WillUnmount;




// What it does:

// The useEffect hook runs after the component renders or when the count value changes.
// console.log("run useEffect", count) logs the current count value whenever the useEffect runs.
// The return inside the useEffect defines a cleanup function. This cleanup runs before the effect is re-executed or when the component unmounts.
// Dependencies:

// [count]: The effect only runs when count changes. If count doesn't change, the useEffect won't execute.


// Example Logs
// Initial render:
// run useEffect 0

// Button click (count = 1):
// clean up 0
// run useEffect 1

// Button click (count = 2):
// clean up 1
// run useEffect 2