import React, { Component } from 'react'

class Counter extends Component{
    state={
        count: 2
        //imageUrl : "https://cdn.pixabay.com/photo/2020/01/27/19/09/sky-4798109_960_720.jpg"
    }
    
	render(){               
		return(            
           <div>
              <center> <h1> Welcome to React Component </h1></center>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>             	
                <button className= "btn btn-secondary btn-sm"> Increment </button>
            </div>       
	);
	}
    getBadgeClasses() {
        let classes = "badge m-2 badge";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

        formatCount(){
            const{ count } = this.state;
            return count === 0 ? <h2>Zero</h2>: this.state.count
        }
}
export default Counter