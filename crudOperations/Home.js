import React, { Component } from 'react'

import {ProductConsumer} from '../crudOperations/Context'
import { Table, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
            <h3>Crud Operations</h3>
            <ProductConsumer>
                {(value) => {
                    return (
                        <Table size="sm" variant = "dark" striped bordered hover>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Information</th>
                                    <th>Price</th>
                                    <th>Company</th>
                                    <th>Actions</th>
                                </tr>
                          {value.Alldata.map(product => {
                              return (
                                  <tr>
                                    <td>{product.title}</td>
                                    <td>{product.info}</td>
                                    <td>{product.price}</td>
                                    <td>{product.company}</td>
                                    <td>{product.Title}</td>
                                  </tr>
                              )
                          })}
                          </tbody>
                        </Table>
                    )
                }}
            </ProductConsumer>                
            </div>
        )
    }
}

