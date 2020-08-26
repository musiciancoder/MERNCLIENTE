import React, {useReducer} from 'react';
import alertaReducer from "./alertaReducer";
import alertaContext from "./alertaContext";

import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from "../../types";
import ProyectoState from "../proyectos/proyectoState";

const AlertaState = (props) => {
    const initialState = {
        alerta:null
    }

    const [state, dispatch] = useReducer(alertaReducer, initialState);

    //Funciones dispatch
       const mostrarAlerta = (msg, categoria) => { //fn llamada al enviar el formulario para registro de usuario en NuevaCuenta.js
               dispatch({
                   type: MOSTRAR_ALERTA,
                   payload: {
                       msg,
                       categoria //para dar un estilo
                   }
               });

               setTimeout(()=>{
                   dispatch({
                       type: OCULTAR_ALERTA
                   })
               }, 5000);
           }

    return(
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;
