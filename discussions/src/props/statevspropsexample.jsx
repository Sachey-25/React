import React from "react";
import { useState } from "react";

const PropsRead = () =>{
    const [greeting, setGreeting] =useState('This an example')
    const [show, setShow]=useState(true);
    const handleToggle=()=>{
        setShow(!show)
    }
    const handleChange= (event) =>{
        setGreeting(event.target.value)
    }
    return(
        <div className="stateprops">
            <button onClick={handleToggle} type="button">Toggle</button>
            <input type="text" value={greeting} onChange={handleChange} />
            { show ? <Welcome display={greeting} /> : null }
        </div>
    )}
const Welcome =({ display })=>{
    <div className="component">
        return <h2 >{display}</h2>
    </div>
}
export default PropsRead;