/*Create a class with same name, that extends React.Component
Add a single empty method it called render()
Move the body of the function into the render method()
Replace props with this.props in the render() body
Delete the remaining the empty function */
import React from 'react'
import ReactDOM from 'react-dom'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date : new Date()}
    }
    //LifeCycle Methods to the class
    componentDidMount(){
        // whenever a clock rendered to the DOM
        // for the first time, this is called "mounting" in react
        this.timeID =setInterval(() => this.tick(),1000
        );
    }
    componentWillUnmount(){
        //Whenever the DOM is produced by the clock is removed
        //this is called "unmouting" in react
        clearInterval(this.timeID);
    }
    componentWillUnmountSachin(){
        //Whenever the DOM is produced by the clock is removed
        //this is called "unmouting" in react
        clearInterval(this.timeID);
    }
    tick(){
        this.setState({ date : new Date() });
    }
        render(){
        return (
            <div>
            Hello I am class here!
            <h2> The current time is {this.state.date.toLocaleDateString()}. </h2>
            </div> 
        )
    }
}
ReactDOM.render(<Clock /> , document.getElementById('root'))
