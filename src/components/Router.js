import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from '../Sidebar' 
import Home from './Home'
import Proximamente from './Proximamente'
import Productos from './CrudProductos/Productos';
import InsertarProducto from './CrudProductos/InsertarProducto';
import DetallesProducto from './CrudProductos/DetallesProducto';
import UpdateProducto from './CrudProductos/UpdateProducto';
import DeleteProducto from './CrudProductos/DeleteProducto';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Sidebar />
                                      
                    <Switch>
                        <Route exact path="/reparaciones" component={Productos} />
                        <Route exact path="/create" component={InsertarProducto} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products" component={Proximamente} />
                        <Route exact path="/detalles/:id" render={props => {
                            var id = props.match.params.id;
                            return <DetallesProducto id={id} />
                        }} />
                        <Route exact path="/update/:id" render={props => {
                            var id = props.match.params.id;
                            return <UpdateProducto id={id} />
                        }} />
                        <Route exact path="/delete/:id" render={props => {
                            var id = props.match.params.id;
                            return <DeleteProducto id={id} />
                        }}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}