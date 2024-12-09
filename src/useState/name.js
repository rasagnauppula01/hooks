import { useState } from "react"

const Name=()=>{
    const [name,setName]=useState("")

    return(
        <>
            <p>My Name is {name}</p>
            <button onClick={()=>setName("Rasagna Uppula")}>Click on button</button>
        </>
    )
}
export default Name;