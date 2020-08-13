//Este archivo es una mezcla entre el Action.js (llamado a vece tambien Dispatch.js) de Redux y el provider de Context


import React, {useReducer} from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = props =>{
    //Estado inicial (con Redux normal va en el reducer)
    const initialState ={
        formulario: false
    }

    //useReducer provoca que el estado sea manejado como una mezcla entre Context y Redux
    //Dispatch para enviar las acciones al reducer (proyectoReducer en nuestro caso).
    const [state, dispatch] = useReducer(proyectoReducer,initialState );

    //serie de funciones CRUD

    return(
        <proyectoContext.Provider  //Este es el provider, que en context normal va en el archivo NombreContext, es decir acá iría en el archivo proyectoContext,
            //pero como estamos usando useReducer va en el State
        value={{
            formulario:state.formulario //valor que pasamos para que este disponible
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;
