import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class Updateproduct extends Component {

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaFalRef = React.createRef();
    cajaEquRef = React.createRef();
    cajaEstRef = React.createRef();

    state = { status: false }

    modificarProducto = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumRef.current.value);
        var nom = this.cajaNomRef.current.value;
        var fal = this.cajaFalRef.current.value;
        var equ = this.cajaEquRef.current.value;
        var est = this.cajaEstRef.current.value;
        var producto = {
            id: num
            , nombre: nom
            , falla: fal
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
            return <Redirect to="/reparaciones" />
        }
        return (
            <div>
                <h1>Modificar producto {this.props.id}</h1>
                <NavLink to={'/detalles/' + this.props.id} className="btn btn-sm  btn-dark">Detalles</NavLink>&nbsp;
                <NavLink to={'/reparaciones'} className="btn btn-sm  btn-dark">Lista</NavLink>
                <form onSubmit={this.modificarProducto} style={{width: "50%", margin: "auto"}}>
                <label>Número: </label>
                    <input type="number" name="cajanum" className="form-control" ref={this.cajaNumRef}
                        value={this.props.id} readOnly />
                    <label>Nombre: </label>
                    <input type="text"  name="cajanom" className="form-control" ref={this.cajaNomRef} defaultValue={this.props.falla} />
                    <label>Fallas: </label>
                    <input type="text" name="cajafal" className="form-control" ref={this.cajaFalRef} />
                    <label>Equipo: </label>
                    <input type="text" name="cajaequ" className="form-control" ref={this.cajaEquRef} />
                    <label>Estado Orden: </label>
                    <input type="text" name="cajaest" className="form-control" ref={this.cajaEstRef} /><br />
                    <button className="btn btn-success">Modificar</button>
                    
                </form>
               
            </div>
        )
    }
}
