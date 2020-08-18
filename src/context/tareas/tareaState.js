import React, {useReducer} from "react";
import TareaContext from "./tareaContext";
import TareaReducer from './tareaReducer';
import {v4 as uuid} from "uuid";
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
        tareas: [
            {id:1 ,nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {id:2 ,nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {id:3 ,nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3},
            {id:4 ,nombre: 'Elegir hosting', estado: true, proyectoId: 4},
            {id:5 ,nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {id:6 ,nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {id:7 ,nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3},
            {id:8 ,nombre: 'Elegir plataforma', estado: true, proyectoId: 4},
            {id:9 ,nombre: 'Elegir colores', estado: false, proyectoId: 1},
            {id:10 ,nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 2},
            {id:11 ,nombre: 'Elegir plataforma', estado: true, proyectoId: 3},
            {id:12 ,nombre: 'Elegir colores', estado: false, proyectoId: 4},
            {id:13 ,nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3},
        ],

        tareasproyecto: null, //estado para mostrar las tareas correspondiente a cada proyecto cuando clickamos en cada proyecto
        errortarea: false, //para validar formulario en FormTarea.js
        tareaseleccionada: null, //la tarea seleccionada a editar
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
        // Asignarle un id
        tarea.id = uuid();
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
                tareas: state.tareas,  //se disponibilizan las tareas a los componentes. Esto se puede ver en RDT en el reducer de TareaState
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
