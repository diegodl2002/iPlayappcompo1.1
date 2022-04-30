import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class UpdateHospital extends Component {

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaDirRef = React.createRef();
    cajaClaRef = React.createRef();

    state = { status: false }

    modificarProducto = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumRef.current.value);
        var nom = this.cajaNomRef.current.value;
        var equ = this.cajaDirRef.current.value;
        var est = this.cajaClaRef.current.value;
        var producto = {
            id: num
            , nombre: nom
            , equipo: equ
            , estadoorden: est
        };
        var request = "/productos/" + num;
        var url = Global.urlproductos + request;
        axios.put(url, producto).then(res => {
            this.setState({status: true});
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Modificar producto {this.props.id}</h1>
                <NavLink to={'/detalles/' + this.props.id} className="btn btn-sm  btn-dark">Detalles</NavLink>&nbsp;
                <NavLink to={'/'} className="btn btn-sm  btn-dark">Lista</NavLink>
                <form onSubmit={this.modificarProducto} style={{width: "50%", margin: "auto"}}>
                <label>Número: </label>
                    <input type="number" name="cajanum" className="form-control" ref={this.cajaNumRef}
                        value={this.props.id} readOnly />
                    <label>Nombre: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaNomRef} />
                    <label>Equipo: </label>
                    <input type="text" name="cajadir" className="form-control" ref={this.cajaDirRef} />
                    <label>Estado Orden: </label>
                    <input type="text" name="cajatel" className="form-control" ref={this.cajaClaRef} /><br />
                    <button className="btn btn-success">Modificar</button>
                </form>
            </div>
        )
    }
}
