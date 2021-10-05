import React from 'react'
// import Sample from 'src\\Components\\Navbar.js'

import BootsrapReact from '../bootsrapReact'
import TextForm from '../Components/TextForms'
import Forms from '../ReactForms/form'

 function App(){
    return (
        <div>
            <BootsrapReact title="TechMasters" />
            <div className="container">
            <TextForm heading="Enter the text to analyze"/>
            <Forms />
            </div>
        </div>
    );
}
export default App;