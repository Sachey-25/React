import React, { useState } from 'react'

const MultipleInputs = () => {

    const [userRegistration, setuserRegistraion] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
       // console.log(name, value);
        setuserRegistraion({ ...userRegistration, [name]:value, })
    }
    const handleSubmit=(e) => {
        e.preventDefault()

        const newRecord = { ...userRegistration, id:new Date().getTime().toString() }
        console.log(records)  
        setRecords([...records, newRecord])
       // console.log(records) 

        setuserRegistraion({username:"",email:"",phone:"",password:""})
    }
    return(
        <div className="container">
        <center><h1> Hello multipleInputs</h1> </center>
        <form action ="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"> Fullname </label> <br/>
                <input type = "text" autoComplete="off" 
              value={userRegistration.username}
                onChange={handleInput}
                name ="username" id ="username " />
            </div>
            <div>
                <label htmlFor="email"> email </label><br/>
                <input type = "text" autoComplete="off" 
               value={userRegistration.email}
                onChange={handleInput}
                name ="email" id ="email " />
            </div>
            <div>
                <label htmlFor="phone"> phone </label><br/>
                <input type = "number" autoComplete="off" 
              value={userRegistration.phone}
                onChange={handleInput}
                name="phone" id ="phone " />
            </div>
            <div>
                <label htmlFor="password"> password </label><br />
                <input type = "password" autoComplete="off" 
               value={userRegistration.password}
                onChange={handleInput}
                name="password" id ="password " /><br/>
            </div>
            <button type ="submit" >Registration</button>

        </form>
        <div>
            {
                records.map((props) => {
                    return (
                        <div className="ShowDataInStyle">
                            <p>{props.username}</p>
                            <p>{props.email}</p>
                            <p>{props.phone}</p>
                            <p>{props.password}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )    
}
export default MultipleInputs