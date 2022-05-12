import React, { useState } from "react";

const Parent = () =>{
    return(
    <div>
        <h1>INR to Euro</h1>
        <Amount toCurrency = { (amount) => <Euro amount={amount} />} />
        <h1>INR to Pound</h1>
        <Amount toCurrency = { (amount) => <Pound  amount={amount} />} />
    </div>
)}

const Amount = ( { toCurrency }) =>{
    const [ amount, setAmount ] = useState(0)

    const handleIncrement = () => { setAmount (amount +1 )}
    const handledecrement = () => { setAmount (amount -1 )}
    return(
        <div className="childprop">
            <button type="button" onClick={handleIncrement}> + </button>
            <button type="button" onClick={handledecrement}> - </button>
            <p> INR rupees is : { amount} </p>
            {toCurrency(amount)}

        </div>
    )}

    //variable rupess and Euro
    const Euro =( {amount}) => <p> Euro: {amount * 0.86} </p>
    const Pound = ({amount}) => <p> Pount: {amount * 0.76} </p>

export default Parent;