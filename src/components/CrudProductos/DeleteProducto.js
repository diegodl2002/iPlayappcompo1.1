import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';

export default class DeleteProducto extends Component {

    state = { status: false };

    eliminarProducto = () => {
        var url = 'http://localhost:4000/users/delete/' + this.props.id ;
        axios.delete(url).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/reparaciones" />
        }
        return (
            <div>
                <br />
                <h1 style={{color: "red"}}>¿Desea eliminar el producto? {this.props.id}?</h1><br />
                <NavLink to="/reparaciones" className="btn btn-light">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.eliminarProducto} className="btn btn-danger">Eliminar</button>
            </div>
        )
    }
}
