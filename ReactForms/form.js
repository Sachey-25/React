import React, { useState } from 'react'

const Forms = () => {
//States and setState --> useStateHoot
const [name, setName] = useState()
const [fullName, setfullName] = useState()

    const InputEvent = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }    
    const onSubmit = () => {
        setfullName(name)
    }
    return (
        <div classname = "container">
            <div className="mb-1">
            <label for="mytextform" className="form-label">Hello {fullName}</label>
            <input type="text" className="form-control" onChange={InputEvent} 
            value = {name} id="mytextform" 
            placeholder="Enter your name" /><br />
            <button onClick={onSubmit} >Click me</button>
            </div>
        </div>
    )
}
export default Forms
