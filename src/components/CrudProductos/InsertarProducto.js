import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class InsertarProducto extends Component {

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaFecRef = React.createRef();
    cajaFalRef = React.createRef();
    cajaEquRef = React.createRef();
    cajaEstRef = React.createRef();

    state = { status: false }

    nuevoProducto = (e) => {
        e.preventDefault();
        var nom = this.cajaNomRef.current.value;
        var fal = this.cajaFalRef.current.value;
        var fec = this.cajaFecRef.current.value;
        var equ = this.cajaEquRef.current.value;
        var est = this.cajaEstRef.current.value;
        var producto = {
            nombre: nom
            , fecha: fec
            , falla: fal
            , equipo: equ
            , estadoorden: est
            
        };
       
        axios.post('http://localhost:4000/users/create', producto).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/reparaciones" />
        }
        return (
            <div>
                <h1>Nuevo Ingreso</h1>
                <form onSubmit={this.nuevoProducto} style={{width: "50%", margin: "auto"}}>
                    <label >Nombre: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaNomRef} />
                    <label>Fecha: </label>
                    <input type="date" name="cajafec" className="form-control" ref={this.cajaFecRef} />
                    <label>Fallas: </label>
                    <input type="text" name="cajafal" className="form-control" ref={this.cajaFalRef} />
                    <label>Equipo: </label>
                    <input type="text" name="cajaequ" className="form-control" ref={this.cajaEquRef} />
                    <label>Estado Orden: </label>
                    <input type="text" name="cajaest" className="form-control" ref={this.cajaEstRef} /><br />
                    <button className="btn btn-success">Añadir</button>
                </form>
            </div>
        )
    }
}
