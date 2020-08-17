import React, {useReducer} from "react";
import TareaContext from "./tareaContext";
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,

} from "../../types";

const TareaState = (props) => {

    //Estado inicial para tareas. Aunque se declaran e inicializan en el State, se ven en RDT en el reducer
    const initialState = {
        tareas: [
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3},
            {nombre: 'Elegir hosting', estado: true, proyectoId: 4},
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3},
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 4},
            {nombre: 'Elegir colores', estado: false, proyectoId: 1},
            {nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 2},
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 3},
            {nombre: 'Elegir colores', estado: false, proyectoId: 4},
            {nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3},
        ],

        tareasproyecto:null //estado para mostrar las tareas correspondiente a cada proyecto cuando clickamos en cada proyecto
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState); //se le pasa el reducer y el estado inicial

    //Crear las fx


    //Obtener las tareas de un proyecto al hacer click en el proyecto
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }


    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,  //se disponibilizan las tareas a los componentes. Esto se puede ver en RDT en el reducer de TareaState
                tareasproyecto: state.tareasproyecto,
                obtenerTareas //se ocupa en Proyecto.js

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )


}

export default TareaState;
