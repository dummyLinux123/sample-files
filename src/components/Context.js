import React, { useContext } from "react";

const AppContext = React.createContext("");

const AppProvider = ({children}) => {

    /* list here the useState functions */


    return (
        <AppContext.Provider value={{name: "Emman", age: 24, sex: "male"}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};