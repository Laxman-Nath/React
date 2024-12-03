import { useEffect, useState } from "react"

export const UseEffectHook=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
       console.log("We are inside use effect .........");
    },[count])
    return (
        <>
        <h1>Inside use effect! {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </>
    )
}