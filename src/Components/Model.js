function Model (props){

    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }


    //if i click on the button delete<--- it shuld ask me that are you really want to 
    //delete this!!!!

    return(
    <div className='model'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick = {cancelHandler}>
            Cancel
            </button>
        <button className='btn' onClick = {confirmHandler}>
            Confirm
            </button>
    </div>
    );
}

export default Model;