//USEEFFECT: used to perform side effects
//without dependency array: it runs on every single change in the component

import React, { useEffect, useState } from "react";

const UseEffecteg=()=>{
    const [count, setCount]= useState(0);

    useEffect(()=>{
        document.title=`${count} new messages!`
        console.log(count)
    });

    return(
        <>
            <h3>count:{count}</h3>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </>
    )
}
export default UseEffecteg;