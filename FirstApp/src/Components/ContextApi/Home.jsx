import { useContext } from "react"
import { BioContext } from "./ContextApi";

export const Home=()=>{
    const {name,age}=useContext(BioContext);
    return <div className="h-full flex flex-col justify-center items-center">
        <h1>This is home page</h1>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
    </div>
}