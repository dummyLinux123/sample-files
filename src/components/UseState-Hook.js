import { useState } from "react";

const Hook1 = () => {

    /* Example Data coming from Database */
    const [currentData, setCurrentData] = useState({name: 'Emman', age :24}) ; 

    const handleClick = () => {
        
        setCurrentData ((prevState) => ({
            ...prevState,
            name : inputData
        }) 
       )
    }

    /* state for the input data */
    const [inputData, setInputData] = useState("");
    const handleChange = (e) => {
        setInputData((prevState)=> (
            prevState = e
        ))
    }
    /* state for the input data */

    return (
        <div>  
            <div>
                <label>
                    Update name :
                    <input name="firstName" onChange={(e)=>handleChange(e.target.value)}></input>
                </label>  

                <button onClick={handleClick}>Click me</button>
            </div>
            
            <div>
                Hi, you are {currentData.name} and you are {currentData.age}
            </div>
        </div>
    )
}

export default Hook1