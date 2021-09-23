//create ne component
// if its a funciton its called as function
function Todo(props){
    <h3><center>Welcome to React, Programming with Sachin </center></h3>
    return (
    <div>
    <div className='card'>
        <h2> {props.text} </h2>
    </div>
    <div className='actions'>
            <button className='btn'> Delete </button>
    </div>
    </div>
    );
}

//we have to make sure that the componemt has to exported to its file
export default Todo;

