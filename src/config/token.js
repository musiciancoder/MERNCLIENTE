import clienteAxios from "./axios";

//Este archivo contiene los headers como variable auxiliar. Es invocada cuando tengamos q pasar headers al backend, ya que en los headers se pasa el token para autorizar al usuario a hacer cosillas

const tokenAuth = token =>{
    if (token){
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    }else {
        delete clienteAxios.defaults.headers.common['x-auth-token']; //si no hay token, se elimina 'x-auth-token'
    }
}

export default tokenAuth;
