import React , { Component } from 'react'


export default class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false
        }
    }
    render(){
       return this.state.isLoggedIn && <div><center> <h1> Welcome Sachin </h1></center> </div>

        // return this.state.isLoggedIn ?(           
        //     <div>Welcome Sachin this is Ternary operator</div> ) : 
        //     (<div>Welcome Guest This is Ternary Operator </div>)
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div> <center><h1>Welcome Sachin- This is If block </h1> </center> </div>
        // }else{
        //     message = <div> <center> <h1> Welcome Guest - This is else block </h1></center></div>
        // }
        // return <div>{message}</div>
    }
}
//     render(){
//         if(this.state.isLoggedIn){
//             return(
//                 <div>
//                     <center><h1>Welcome Sachin</h1></center>
//                 </div>
//             )
//         }else{
//             return(<div><center><h1>Welcome Guest</h1></center></div>)
//         }
//     }
// }