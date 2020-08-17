import React, {useReducer} from "react";
import TareaContext from "./tareaContext";
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA
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

        tareasproyecto: null, //estado para mostrar las tareas correspondiente a cada proyecto cuando clickamos en cada proyecto
        errortarea: false, //para validar formulario en FormTarea.js
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState); //se le pasa el reducer y el estado inicial

    //Crear las fx. Estas funciones se ven en RDT en Context.Provider


    //Obtener las tareas de un proyecto al hacer click en el proyecto
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = (tarea) => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Valida y muestra un error si es necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA

        })
    }


    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,  //se disponibilizan las tareas a los componentes. Esto se puede ver en RDT en el reducer de TareaState
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,//se usa en FormTarea.js
                obtenerTareas, //se ocupa en Proyecto.js
                agregarTarea, //se usa en FormTarea.js
                validarTarea

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )


}

export default TareaState;
