import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext'

//HIGHER ORDER COMPONENT, PARA PROTEGER COMPONENTES (En este caso el component es Proyectos.js), es decir se exigen las credenciales de usuario en Proyectos.js
//Para que funcione, ademas debemos especificar en los Routes an App.js que Proyectos.js esta mandando llamar a este H.O.C. mediante   <RutaPrivada exact path="/proyectos" component={Proyectos}/>
//El codigo siempre es el mismo para H.O.C.
const RutaPrivada = ({component: Component, ...props}) => { // copia de los props al componente hijo

    const authContext = useContext(AuthContext);
    const {autenticado, cargando, usuarioAutenticado} = authContext;

    //Para que si recarga la pagina localhost:3000/proyectos siga estando autenticado
    useEffect(() => {
        usuarioAutenticado();

        //eslint-disable-next-line
    },[] );

    return (
        <Route {...props} render={props => !autenticado && ! cargando? ( //si no esta autenticado...
            <Redirect to="/"/> //...redireccionamos..
            // () es lo mismo que return()
        ) : ( //...sino...
            <Component {...props} /> //...mandamos llamar al componente que lo está mandando llamar a este higher order component (en este caso proyectos,js)
        )}/>
    );
}

export default RutaPrivada;
