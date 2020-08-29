import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from "../../types";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";


const AuthState = props => {
    //ESTADO INICIAL PARA AUTENTICACION DE USUARIO
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null, //inicialmente no esta autenticado
        usuario: null,
        mensaje: null

    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);


    //Se registra por primera vez
    const registrarUsuario = async (datos) => {

        try {
            //llamada al backend
            const respuesta = await clienteAxios.post('/api/usuarios', datos); //clienteAxios definido en carpeta Config
            console.log(respuesta); //el token viene en esta respuesta desde el back desde usuarioController.js

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data //aca va el token
            });

            //Obtener el usuario autenticado
            usuarioAutenticado();

        } catch (error) {

            const alerta = {
                msg: error.response.data.msg, //response.data.msg del backend linea 35 de usuarioController.js  return res.status(400).json({ msg: 'El usuario ya existe' });
                categoria: 'alerta-error'
            }

            console.log(error.response); //asi se ve el error en axios
            console.log("Mensaje: " + error.response.data.msg);

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    //Retorna el usuario autenticado. fn se llama al Registrar usuario u al Loguear usuario
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token'); //el token ya estaba con setItem con REGISTRO_EXITOSO en el reducer
        if (token) {
            //Fn para enviar el token por headers
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            //console.log(respuesta); //de backend
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario //de backend
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //Cuando el usuario inicia sesión (en el formulario para loguearse)
    const iniciarSesion = async (datos) => {

        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            console.log("Soy respuesta " + respuesta);

            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data //acá va el token de autenticacion
            });

            //Obtener el usuario autenticado
            usuarioAutenticado();

        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg, //response.data.msg del backend linea 35 de usuarioController.js  return res.status(400).json({ msg: 'El usuario ya existe' });
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }


    return (
        <AuthContext.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            registrarUsuario,
            iniciarSesion,
            usuarioAutenticado

        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
