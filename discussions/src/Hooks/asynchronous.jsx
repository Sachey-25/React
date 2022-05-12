import React from "react";
import { useState } from "react";

const Asynchronous = () => {
    const [count,setCount] = useState(0)

    const handleIncrease =() =>{
        setTimeout( () => setCount(count+1), 4000)
    }
    const handledecrease =() =>{
        setTimeout( () => setCount(count-1), 4000)
    }
    return(
        <div className="Async">
            Count:{ count } <hr />
            <div className="button">
                <button type="button" onClick={handleIncrease}>Increase</button>
                <button type="button" onClick={handledecrease}>Decrease</button>
            </div>
        </div>
    )}
export default Asynchronous;