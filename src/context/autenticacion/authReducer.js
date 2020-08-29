//PARA AUTENTICAR USUARIO

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token); //el token viene de usuarioController en el backend
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token'); //puede ser que alguien ya tenga un token (no entedi bien)
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload, //mensaje: alerta y alerta trae el msg del backend y categoria que es el estilo
                cargando: false
            }

        default:
            return state;
    }
}


