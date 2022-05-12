import React, { useState } from "react";
//user is from the function <-- props as parameter
const User =({ user, onUpdateName }) => {
    //name is coming from state
    const [ name, setName ] = useState(user.name);

function handleNameChange(event){
    setName(event.target.value);
}
return (
    <li>
        {user.name}
        <input type="text" value= {name} onChange= {handleNameChange}/>
        <button type="button" onClick={() => onUpdateName}  />Update
    </li>
)}

export default User;