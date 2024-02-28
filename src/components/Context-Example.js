import React from "react";
import { useGlobalContext } from "./Context";

const ContextExample = () => {

    const {name, age} = useGlobalContext();

    return(
        <div>
            <h1 style={{display:"block"}}>my name coming from Context is {name}</h1>
            <h1 style={{display:"block"}}>my age coming from context is {age}</h1>
        </div>
    )
}

export default ContextExample;