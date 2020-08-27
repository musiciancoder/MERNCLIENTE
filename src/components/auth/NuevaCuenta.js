import React, {useContext, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from '../../context/autenticacion/authContext'
import { withRouter } from 'react-router-dom'; //PARA QUE EL PUSH HISTRORY FUNCIONE!!

//COMPONENTE PARA QUE EL USUARIO SE REGISTRE
const NuevaCuenta = (props) => {

    //extraer valores del context

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado ,registrarUsuario} = authContext;

    //EN caso q el usuario se haya autenticado o registrado o sea un usuario duplicado
  //  const history = useHistory();

    useEffect ( () => {
        if (autenticado){
            props.history.push('/proyectos');//una vez q el usuario se registre, lo lleva a los proyectos
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }


     },[mensaje, autenticado, props.history] ); //tenemos acceso a props.history porque estamos ocupando react-router-dom


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

    //Cuando el usuario quiere registrarse
    const onSubmit = (e) => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if (nombre.trim()===''||
            email.trim()===''||
            password.trim()===''||
            confirmar.trim()==='')
        {
              mostrarAlerta('Todos los campos son obligatorios','alerta-error');
              return; //para no seguir con el codigo q viene a contimuacion
        }

        //Revisar que password minimo de 6 caracteres
        if (password.length<6){
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        //Que los 2 password sean iguales
        if (password!==confirmar ){
            mostrarAlerta('Los password deben ser iguales','alerta-error');
            return;
        }

        //Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        });
    }

    return (

        <div className="form-usuario">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
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
                            name="confirmar"
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
