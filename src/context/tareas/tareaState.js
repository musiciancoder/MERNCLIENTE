import React, {useReducer} from "react";
import TareaContext from "./tareaContext";
import TareaReducer from './tareaReducer';
//import {v4 as uuid} from "uuid";
import clienteAxios from "../../config/axios";

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA
} from "../../types";

const TareaState = (props) => {

    //Estado inicial para tareas. Aunque se declaran e inicializan en el State, se ven en RDT en el reducer
    const initialState = {
        tareasproyecto: [], //estado para mostrar las tareas correspondiente a cada proyecto cuando clickamos en cada proyecto
        errortarea: false, //para validar formulario en FormTarea.js
        tareaseleccionada: null, //la tarea seleccionada a editar
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState); //se le pasa el reducer y el estado inicial

    //Crear las fx. Estas funciones se ven en RDT en Context.Provider


    //Obtener las tareas de un proyecto al hacer click en el proyecto
    const obtenerTareas = async (proyecto) => {
        console.log(proyecto);
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params: {proyecto}});
            console.log(resultado);
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = async (tarea) => {
        // Asignarle un id
       // tarea.id = uuid(); //no se usa con mongo, solo al principio
        console.log(tarea);
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado);
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            console.log(error);

        }
    }

    //Valida y muestra un error si es necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA

        })
    }

    //Eliminar tarea por id
       const eliminarTarea = (id) => {
               dispatch({
                   type: ELIMINAR_TAREA,
                   payload: id
               })
           }
           //Cambia el estado de cada tarea. Con esto al apretar el boton de Completo pasa a incompleto y vice-versa
       const cambiarEstadoTarea = (tarea) => {
               dispatch({
                   type: ESTADO_TAREA ,
                   payload: tarea
               })
           }

           //Extrae una tarea para edicion
    const  guardarTareaActual= (tarea) => {
        dispatch({
            type: TAREA_ACTUAL ,
            payload: tarea
        })
    }

    //Actualiza el array de tareas, con la tarea que estamos editando
       const  actualizarTarea= (tarea) => {
               dispatch({
                   type: ACTUALIZAR_TAREA,
                   payload: tarea
               })
           }

           //Elimina la tareaseleccionada
       const limpiarTarea = () => {
               dispatch({
                   type:LIMPIAR_TAREA

               })
           }

    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,//se usa en FormTarea.js
                tareaseleccionada:state.tareaseleccionada,
                obtenerTareas, //se ocupa en Proyecto.js
                agregarTarea, //se usa en FormTarea.js
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )


}

export default TareaState;
