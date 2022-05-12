import React from "react";
import { useState } from "react";

const Person =() => {
    const [output,input]=useState({
                    firstname:"react",
                    lastname:"frontend",
                    message:"developement",
                    info:"React is javascript library",
                    display:"This is an example"
})
                const Updateinfo = () => {
                    input(previousState => {
                        return { ...previousState, display:"This is a total example of react useState hook"}
                    })
                }
return(
    <div>
                <div className="Person">
                <h3> My firstname is : {output.firstname}</h3>
                <p> My last name is {output.lastname}, and I am web {output.message} of {output.info}</p>
                <h1>UseState Output value executed and i.e... {output.display}</h1>
                <button type="button" onClick={Updateinfo}>click me</button>
                <h3>This is useState update Hook: {output.Updateinfo}</h3>
                </div>
    </div>       
)}
export default Person;