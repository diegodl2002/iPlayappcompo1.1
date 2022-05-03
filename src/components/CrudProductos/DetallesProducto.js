import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class DetallesProducto extends Component {
    
    state = {
        producto: {}
        , status: false
    }

    mostrarProducto = () => {
        var request = "/productos/" + this.props.id;
        var url = Global.urlproductos + request;
        axios.get(url).then(res => {
            this.setState({
                producto: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarProducto();
    }

    render() {
        return (
            <div>
                <br /><br />
                <h1><u>Detalles del producto número {this.props.id}</u></h1>
                {this.state.status === true &&
                (
                    <React.Fragment>
                        <br />
                        <NavLink to="/reparaciones" className="btn btn-sm btn-dark">Listado</NavLink>
                        <br /><br />
                        <h3>Nombre: <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.nombre}</span></h3>
                        <h3>Fallas: <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.falla}</span></h3>
                        <h3>Equipo: <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.equipo}</span></h3>
                        <h3>Estado Orden: <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.estadoorden}</span></h3>
                        <NavLink to={"/update/" + this.state.producto.id} className="btn btn-primary">Modificar</NavLink> &nbsp;&nbsp;
                        <NavLink to={"/delete/" + this.state.producto.id} className="btn btn-danger">Borrar</NavLink>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
