import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router-dom';

export default class InsertarProducto extends Component {

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaDirRef = React.createRef();
    cajaClaRef = React.createRef();

    state = { status: false }

    nuevoProducto = (e) => {
        e.preventDefault();
        var nom = this.cajaNomRef.current.value;
        var equ = this.cajaDirRef.current.value;
        var est = this.cajaClaRef.current.value;
        var producto = {
            nombre: nom
            , equipo: equ
            , estadoorden: est
        };
        var url = Global.urlproductos + '/productos';
        axios.post(url, producto).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Nuevo Ingreso</h1>
                <form onSubmit={this.nuevoProducto} style={{width: "50%", margin: "auto"}}>
                    <label>Nombre: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaNomRef} />
                    <label>Equipo: </label>
                    <input type="text" name="cajadir" className="form-control" ref={this.cajaDirRef} />
                    <label>Estado Orden: </label>
                    <input type="text" name="cajatel" className="form-control" ref={this.cajaClaRef} /><br />
                    <button className="btn btn-success">Añadir</button>
                </form>
            </div>
        )
    }
}
