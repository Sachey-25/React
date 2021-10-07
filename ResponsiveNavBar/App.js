import React from 'react'
import { Route } from "react-router-dom"
import Navbar from "../ResponsiveNavBar/Navbar"
import Home from '../ResponsiveNavBar/Home'
import About from '../ResponsiveNavBar/About'
import Contact from '../ResponsiveNavBar/Contact'
import Signup from '../ResponsiveNavBar/Signup'
import Login from '../ResponsiveNavBar/Login'

const App = () => {
    return (
        <div>
            <Navbar />

            <Route exact path="/home">
                <Home />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Route path="/signup">
                <Signup />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

        </div>
    )
}

export default App