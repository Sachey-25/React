import React from "react";

        const Coffee = () => {
            return(
                            <div className="objects">
                                <Drink statement={{ 
                                    filter:'GoodTaste', 
                                    normal:'Strong',
                                    firstname:"Sachin",
                                    lastname:"Anil",
                                    city:"Bangalore",
                                    training:"React"
                                }} />
                            </div>
                        )}
        const Drink = ( { statement } )=>{
            return(
                <div className="evening">
                           <h2 style={ { color:'Brown'} }>{statement.filter}</h2>
                            <h2 style={ { color:'Brown' } }>{statement.normal}</h2>
                            <h2 style={ { color:'Green' } }>{statement.firstname}</h2>
                            <h2 style={ { color:'Blue' } }>{statement.lastname}</h2>
                            <h2 style={ { color:'Yello' } }>{statement.city}</h2>
                            <h2 style={ { color:'Red' } }>{statement.training}</h2>
                        </div>
                    )}
export default Coffee;