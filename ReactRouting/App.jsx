import React from 'react'
import { Route, Switch } from "react-router-dom"
import About from "../ReactRouting/About"
import Contact from '../ReactRouting/Contact'
import Home from '../ReactRouting/Home'
import Error from '../ReactRouting/Error'
import Menu from '../ReactNavLinks/Menu'

const App = () => {
    return(
        <>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route path="/contact" component={Contact} / >          
            <Route path="/contact/Name" component={Contact} />
            <Route component={Error}/>
            
        </Switch>

        </>



    ) 

}
export default App