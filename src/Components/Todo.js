import {useState} from 'react';
import Model from "./Model";
import Backdrop from "./Backdrop";
//create ne component
// if its a funciton its called as function
function Todo(props){
    const [ modelIsOpen, setModelISOpen ] = useState(false);

    function deleteHandler (){
        //console.log("Button has been clicked");
        //console.log(props.text);
        setModelISOpen(true);
    }
    function closeModelHandler(){
        setModelISOpen(false);;
    }
    <h3><center>Welcome to React, Programming with Sachin </center></h3>
    return (
    <div>
    <div className='card'>
        <h2> {props.text} </h2>
    </div>
    <div className='actions'>
            <button className='btn'  onClick = {deleteHandler}> 
            Delete 
            </button>
    </div>
    { modelIsOpen && <Model onCancel={closeModelHandler} onConfirm={closeModelHandler}/> }
    { modelIsOpen && <Backdrop onCancel={closeModelHandler}/> }
    </div>
    );
}
//we have to make sure that the componemt has to exported to its file
export default Todo;

