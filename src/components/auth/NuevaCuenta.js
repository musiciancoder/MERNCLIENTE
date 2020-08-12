import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NuevaCuenta = () => {

    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState ({
        email:'',
        password: '',
        nombre:'',
        confirmar:''
    });

    //extraer de usuario

    const {email,nombre, password, confirmar} = usuario;

    const onChange = (e) => { //al escribir en los inputs...
        guardarUsuario({ //...cambia el estado del usuario
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //Validar que no haya campos vacios

        //Revisar que password minimo de 6 caracteres

        //Pasarlo al action
    }

    return (

        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>


                <form onSubmit={onSubmit}>

                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre} //sin esto igual toma el valor que escribimos hacia el state
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="password"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrar"/>

                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">Volver a iniciar sesión</Link>

            </div>
        </div>
    );
}

export default NuevaCuenta;
