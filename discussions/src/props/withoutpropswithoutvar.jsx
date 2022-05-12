import React from "react";

export const StoreOne = () => {
    return(
        <div className="another">
            {/*where I can call the another component */}
            <WelcomeAgain statement={"Without props without const variable :===> This is assigned value as the variable."} />
        </div>
    )}
const WelcomeAgain=( {statement} )=>{
    return(
        <div className="anything">
            <h2> {statement}</h2>
        </div>
    )}