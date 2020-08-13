import React, {useReducer} from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const proyectoState = props =>{
    const initialState ={
        formulario: false
    }

    //Dispatch para ejecutar las acciones
    const [state, distch] = useReducer(proyectoReducer,initialState );

    //serie de funciones CRUD

    return(
        <proyectoContext.Provider
        value={{
            formulario:state.formulario
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}
