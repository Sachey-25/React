import React from "react";
/*We can pass the data from one component to another component */
                const FunctionComponent = () => {
                    const display='Another way of binding the props'
                    const variable="This is printing"
                    const result="This is also printing"
                    return(
                        <div className="propsClass">
                            <Component text = {display} />
                            < Component anything={variable} />
                            < Component output={result} />
                        </div>
                    )}
                const Component = (props) => {
                    return ( 
                        <div className="component">
                            <h2> {props.text} </h2>
                            <h2>{props.anything}</h2>
                            <h2>{props.output}</h2>
                        </div>
                    )}

                 
export default FunctionComponent;