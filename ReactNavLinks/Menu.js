import React from "react"
import { NavLink } from "react-router-dom"

const Menu =() => {
    return (
        <div>
        <NavLink exact activeClassName="active_class_Home" to ="/"> Home </NavLink>
        <NavLink exact activeClassName="active_class_About" to = "/About"> About </NavLink>
        <NavLink exact activeClassName="active_class_Contact" to ="/contact"> Contact </NavLink>
        <br/>

            <a href="/">Home</a>
            <a href="/about"> About</a>
            <a href="/contact"> Contact us</a>
        </div>
    )}
export default Menu