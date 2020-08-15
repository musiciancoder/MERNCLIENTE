//Este archivo es una mezcla entre el Action.js (llamado a vece tambien Dispatch.js) de Redux y el provider de Context


import React, {useReducer} from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {FORMULARIO_PROYECTO} from '../../types';

const ProyectoState = props =>{



    //Estado inicial (con Redux normal va en el reducer)
    const initialState ={
        proyectos: [
            {id:1, nombre: 'Tienda virtual'},
            {id:2, nombre: 'Intranet'},
            {id:3,nombre: 'Diseño de sitios'},
            {id:4,nombre: 'MERN'}
        ],
        formulario: false
    }

    //useReducer provoca que el estado sea manejado como una mezcla entre Context y Redux
    //Dispatch para enviar las acciones al reducer (proyectoReducer en nuestro caso).
    const [state, dispatch] = useReducer(proyectoReducer,initialState );

    //serie de funciones CRUD
    const mostrarFormulario = () =>{  //esta fn se pasa mas abajo en el provider paa que esté disponible
        dispatch({ //se despacha al reducer (proyectoReducer)
            type: FORMULARIO_PROYECTO
            //TODO dijo que se podia poner un payload
        })
    }

    return(
        <proyectoContext.Provider  //Este es el provider, que en context normal va en el archivo NombreContext, es decir acá iría en el archivo proyectoContext,
            //pero como estamos usando useReducer va en el State
        value={{
            proyectos: state.proyectos,
            formulario:state.formulario, //valor que pasamos para que este disponible
            mostrarFormulario
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;
