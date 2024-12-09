//HOOKS: let you use of state and other react features without using class components
//useState Hook: Track state changes, it accept two values current-value and updateFunction-value

import React from "react";
import { useState } from "react";

const UseCount=()=>{
    const [count,setCount]=useState(0);
    
    function handleClick(){
        setCount(count+1)
    }
    function handDec(){
        if(count>0){
        setCount(count-1)
        }
    }

    return(
        <div>
            <h1>counter:{count}</h1>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handDec}>Decrement</button>
        </div>
    )
}
export default UseCount;