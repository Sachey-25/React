import React, { Component } from 'react'
import { rowData } from '../crudOperations/AppData'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        Alldata : rowData
    }
    render() {
        //console.log(this.state.Alldata)
        return (
            <div>
            <center> <h1>Welcome to Crud operations of react </h1> </center>
            <ProductContext.Provider
            value={{...this.state}}
            >
                {this.props.children}
            </ProductContext.Provider>             
            </div>
        )
    }
}
const ProductConsumer = ProductContext.Consumer
export { ProductProvider, ProductConsumer }