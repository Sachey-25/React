import React , { Component } from 'react'

class UserGreeting extends Component{
constructor(props){
    super(props)
    this.state = {
        isLoggedIn: false
    }
}
    render(){
        let message 
        if(this.state.isLoggedIn){
            message=<div><center><h2>Welcome to React</h2></center></div>
        }else{
            message=<div><center><h1>This is render else statement</h1></center></div>
        }
        return ( <div> {message} </div> )
    }
}
export default UserGreeting










    //     if(this.state.isLoggedIn){
    //         return (
    //             <div>
    //                 <center> <h1>welcome sachin</h1> </center>
    //             </div>
    //         )
    //     }else {
    //         return (
    //             <div> 
    //             <center> <h1>welcome Guest </h1></center>
    //             </div>

    //         )
    //     }
    // }
//}
