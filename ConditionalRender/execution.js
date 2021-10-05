import React, {Component} from 'react'
import UserGreetings from '../ConditionalRender/UserGreetings'

class ApplicationExe extends Component{
    render(){
        return(
            <div className="ApplicationExe">
                <UserGreetings />
            </div>
        )
    }
}
export default ApplicationExe;