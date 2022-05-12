import React from "react";
import { useState } from "react";

const ColorChange = () =>{
    //value ==> set and get
    const [color,setColor] = useState("");
    return(
        <div className="colorChnage">
            <h2>Sky looks like {color}!</h2>
            <button type="button" onClick={ () => setColor('blue')} >Blue</button>
            <button type="button" onClick={ () => setColor('orange')}>Orange</button>
            <button type="button" onClick={ () => setColor('red') }>Red</button>
            <button type="button" onClick={ () => setColor('pink') }>Pink</button>      
        </div>
    )}
export default ColorChange;