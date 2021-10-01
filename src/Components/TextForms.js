
import React, {useState} from 'react'
export default function TextForm(props){

    const handleUpClick = () => {
        console.log("Uppercase button clicked");
        setText("You have clicked on ")

    }

    const handleOnChange = () =>{
        console.log("On change")
    }
    
    const [text,setText] = useState('Enter text here')

    return(                
        <div>
            <h2>{props.heading}</h2>
            <div class="mb-3">
                    <label for="myform" class="form-label">
                    </label>
                    <textarea class="form-control" value = {text} onChange={handleOnChange} id="myform" rows="3"></textarea>
                    <button className="btn btn-primary" onClick ={handleUpClick}>Convert to Uppercase</button>
            </div>
        </div>        
               
    )
}