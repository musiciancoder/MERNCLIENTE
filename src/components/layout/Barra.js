import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';


const Barra = () => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario,usuarioAutenticado, cerrarSesion} = authContext;

    //Para que cuando se cargue localhost:3000/proyectos esté disponible en Barra.js el usuarioAutenticado y lo podamos mostrar
    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return (
        <header className="app-header">
            {usuario?
                <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p>
                :null
            }
            <nav className="nav-principal">
                <button className="btn btn-blank cerrar-sesion"
                onClick={()=>cerrarSesion()}
                >Cerrar Sesión</button>
            </nav>
        </header>

    );
}

export default Barra;
