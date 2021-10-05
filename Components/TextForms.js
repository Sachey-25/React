import React,{useState} from 'react'
//A Stateful Component
/*class example extends React.Component{
   constructor(props){
       super(props)
       this.state={seconds:0}
   }
   Example(){
       this.setState(state => ({
           seconds:state.seconds
       })) 
   }
  sachin(){
       this.interval = setInterval(() => this.Example(), 1000)
   }*/
export default function TextForm(props){
    const handleUpClick = () => {
        console.log("Uppercase button clicked for: "+text)
        let word = text.toUpperCase()
        setText(word)
   }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handledownClick = () => {
        let anotherword = text.toLowerCase()
        setText(anotherword)
    }
    /*const sachinState = () => {
        console.log("This is Another text of state implementaion")
        setSachin('This will get change')
    }*/ 
    //State and setState implementation - definition
    const [text,setText] = useState('Enter text here')
    //const [sachin, setSachin]=useState("This is an Example")
    return(                
        <div>
        <div className="container">
        <h2>{props.heading}</h2>
            <div class="mb-3">
                    <label for="myform" class="form-label">
                    </label>
                    <textarea class="form-control" value = {text} onChange={handleOnChange} id="myform" rows="3"></textarea><br />
                    <button className="btn btn-outline-danger mx-2" onClick ={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-outline-danger mx-2" onClick ={handledownClick}>Convert to Lowercase</button>
            </div> 
            <div className="container">
                <h1>Your text summery</h1>
                <p>{text.split(" ").length} words and {text.length} charecters</p>
                <p>{ 0.001 * text.split(" ").length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text}</p>  
            </div>
        </div>
        </div>                     
    )
}