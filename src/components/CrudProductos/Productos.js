import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Productos extends Component {

    state = {
        productos: []
        , status: false
    }

    cargarProductos = () => {
    
        axios.get('http://localhost:4000/users').then(res => {
            this.setState({
                productos: res.data
                , status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarProductos();
    }
   

    render() {
        return (
            <div>
                <hr />
                <h1>Reparaciones</h1>
                <table className="table table-info">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id Producto</th>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Fallas</th>
                            <th>Equipo</th>
                            <th>Estado Orden</th>
                            <th>Detalle Orden</th>
                            <th>Modif. Orden</th>
                            <th>Eliminar Orden</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status === true &&
                        (
                            this.state.productos.map((prod, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{prod._id}</td>
                                        <td style={{fontWeight: "bold"}}>{prod.nombre}</td>
                                        <td></td>
                                        <td>{prod.falla}</td>
                                        <td>{prod.equipo}</td>
                                        <td>{prod.estadoorden}</td>
                                        <td>
                                            <NavLink to={"/detalles/" + prod._id}>Detalles</NavLink>
                                        </td>
                                        <td> 
                                            <NavLink to={"/update/" + prod._id}>Modificar</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/delete/" + prod._id}>Eliminar</NavLink>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}