import React from "react";
//parent component
class Parent extends React.Component{
    render(){
        return(
            <div className="parentclass">
                <h2>You are in Parent Component</h2>
                <SubClass name="Sachin Anil" userId="12345" />                
            </div>
        )
    }
}
//Child Component
class SubClass extends React.Component{
    render(){
        return(
            <div className="ChildClass">
                <h2>Hello, {this.props.name}</h2>
                <h3>You are inside Child Component</h3>
                <h3>Your userId is: {this.props.userId}</h3>
            </div>
        )
    }
}
export default Parent;