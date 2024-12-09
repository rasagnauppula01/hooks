//empty array: it only run on first render
// 1. Component Did Mount

import React, { useState } from "react";
import { useEffect } from "react";

const EmptyArray=()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`${count} new message`
        console.log(count)
    },[])

    return(
        <>
        <p>{count} new messages</p>
        <button onClick={()=>setCount(count+1)}>click</button>
        
        </>
    )
}
export default EmptyArray;