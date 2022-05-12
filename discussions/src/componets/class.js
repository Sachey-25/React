import React, { Component } from "react";

export default class User extends Component{
    //we will define the constructor
    constructor(){
        super()
        this.state={
            firstName:"Sachin",
            lastName:"Anil",
            age:28,
            city:"Bangalore",
            state:"Karnataka"
    }
}
    render(){
        return(
            <div>
                <h4> My name firstname is : {this.state.firstName} </h4>
                <h4> My name lastname is : {this.state.lastName} </h4>
                <h4> My name age is : {this.state.age} </h4>
                <h4> My name city is : {this.state.city} </h4>
                <h4> My name state is : {this.state.state} </h4>     
            </div>
        )
    }
}
