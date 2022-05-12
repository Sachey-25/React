import React from "react"

export const Store = () => {
    const grosseries='Without Props :==> This is another approach'
    return(
        <div className="another">
           { /*where I can call the another component */}
            <Welcome text={grosseries}/>
        </div>
    )}
const Welcome=( {text} )=>{
    return(
        <div className="anything">
            <h2> {text}</h2>
        </div>
    )}