import React, { useState } from "react";

const State = () =>  {
    const [count, setCount] = useState(0);

    const handleIncrease = () =>{
        setCount(count +1);
    }
    const handleDecrease = () =>{
        setCount(count -1);
    }
    return(         
                <div className="useState">           
                    Count:{count}
                    <button type="button" onClick={handleIncrease}>Increase</button>      
                    <button type="button" onClick={handleDecrease}>Decrease</button>
                </div>
    )}
export default State;