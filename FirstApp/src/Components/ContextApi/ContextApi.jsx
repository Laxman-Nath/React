import { createContext } from "react";

export const BioContext=createContext();

export const BioContextProvider=({children})=>{
const myName="laxman nath";
const myAge=30;
    return( <BioContext.Provider value={{name:myName,age:myAge}}>{children}</BioContext.Provider>)
}