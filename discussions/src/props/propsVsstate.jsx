import React, { useState } from "react";

const Prop = () => {
    const text='Welcome to react props and states'
    const [ show, setShow ]=useState(true);

    const handleToggle = () =>{
        setShow(!show);

    }
    return(
        <div className="stateful">
            <hr />
            <button onClick={handleToggle} type="button" >Toggle</button>
            { show ? <Welcome display={text} /> : null}
            </div>
    )}
    const Welcome = ({display}) => {
        return(
            <div className="class">
                <h2> {display} </h2>
            </div>
        )}
    export default Prop;
