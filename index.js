import React from 'react'
import ReactDOM from 'react-dom'
//import Appfunction from './components/Navbar'
//printf()
//cout >>
//System.out.println("")
//React.js
//import ReactForms from './ReactForms/BasicForm'
//import Responsive from './ReactForms/MultipleInput'
//import './index.css'
//import Greetings from './ConditionalRender/UserGreeting'
//import NameList from './ReactList/NameList'

import { BrowserRouter } from 'react-router-dom'
import "./index.css"
import App from "./ResponsiveNavBar/App"
ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,
document.getElementById('root')
);