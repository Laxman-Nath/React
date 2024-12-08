import { createContext, useContext } from "react";

export const BioContext = createContext();

export const BioContextProvider = ({ children }) => {
  const myName = "laxman nath";
  const myAge = 30;
  return (
    <BioContext.Provider value={{ name: myName, age: myAge }}>
      {children}
    </BioContext.Provider>
  );
};


// custom hook



export const useBioContext = () => {
    const context = useContext(BioContext);

    if (!context) {
        throw new Error('useBioContext must be used within a BioContextProvider');
    }

    const { name = '', age = null } = context;
    return { name, age };
};
