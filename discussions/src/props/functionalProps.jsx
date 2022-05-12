import React from "react";

const Display = () => {
    return(
        <div className="functionalProps">
            <Welcome />
        </div>
    )
}
const Welcome = () => {
    const greetings = 'Good after noon folks, I have a meeting @12.30 lets take break by then.'
    return( 
        <div className="name">
            <h2>{greetings}</h2>
        </div>
    )
}
export default Display;