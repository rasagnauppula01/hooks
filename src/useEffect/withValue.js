//Values in array: it run on first render and run with that variable/value changes
// 2. Component Did Update

import React, { useState } from "react";
import { useEffect } from "react";

const ArrayValue=()=>{
    const [count,setCount]=useState(5);

    useEffect(()=>{
        document.title=`${count} new message`
        console.log(count)
    },[count])

    return(
        <>
        <p>{count} new messages</p>
        <button onClick={()=>setCount(count+5)}>click</button>
        
        </>
    )
}
export default ArrayValue;