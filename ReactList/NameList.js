import React from 'react'

function NameList() {
    //const names = ['Sachin','Sourav','Rahul','Examlpe','Cricket']
    //const nameList = names.map (name => <h1> {name} </h1>)


    const person_info = [
        {
            id:1,
            name:"Sachin",
            age:28,
            skill:'React'

        },
        {
            id:2,
            name:"Pratik",
            age:12,
            skill:'SpringBoot'

        },
        {
            id:3,
            name:"Rahul",
            age:43,
            skill:'Batsman and wicket-Keeper'

        }
]
    const personList = person_info.map(person => 
    <center>
    <h3>
        My id is : {person.id}. My name is : {person.name}. My age is : {person.age} My skill is : {person.skill}
    </h3>
    </center>
    )
    return <div>{personList}</div>
}

export default NameList
