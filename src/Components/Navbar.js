import React from 'react'
// import Sample from 'src\\Components\\Navbar.js'


import BootsrapReact from '../bootsrapReact'
import TextForm from '../Components/TextForms'

 function App(){
    return (
        <div>
            <BootsrapReact title="TechMasters" />
            <div className="container">
            <TextForm heading="Enter the text to analyze"/>
            </div>
            
        </div>
    );
}
export default App;