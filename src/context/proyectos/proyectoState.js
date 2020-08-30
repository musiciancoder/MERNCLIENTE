//Este archivo es una mezcla entre el Action.js (llamado a vece tambien Dispatch.js) de Redux y el provider de Context


import React, {useReducer} from "react";
import {v4 as uuid} from "uuid";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
    AGREGAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTOS,
    VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO
} from '../../types';

import clienteAxios from "../../config/axios";

const ProyectoState = props => {

    //Estado inicial (con Redux normal va en el reducer)
    const initialState = {
        proyectos: [], //contiene los proyectos a mostrar
        formulario: false, //mostrar condicionalmente formulario
        errorformulario: false, //mostrar condicionalmente
        proyecto: null //para q al hacer click en un proyecto se pueda manipular
    }

    //useReducer provoca que el estado sea manejado como una mezcla entre Context y Redux
    //Dispatch para enviar las acciones al reducer (proyectoReducer en nuestro caso).
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones CRUD. Estas funciones son los actions, que en REDUX van el el archivo actions.js (tambien llamado dispatch.js)

    const mostrarFormulario = () => {  //esta fn se pasa mas abajo en el provider paa que esté disponible
        dispatch({ //se despacha al reducer (proyectoReducer)
            type: FORMULARIO_PROYECTO

        })
    }

    //obtener los proyectos listados
    const obtenerProyectos = async () => {

        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos //solo con payload: resultado.data marca error "map is not a function"
            })

        } catch (e) {
        }

    }

    //Agregar nuevo proyecto
    const agregarProyecto = async (proyecto) => { //fn llamada en NuevoProyecto, al hacer click en submit

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto); //enviar el proycto
            console.log(resultado);

            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Validar el formulario por errores

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el proyecto que el usuario clicka
    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina un proyecto
    const eliminarProyecto = async (proyectoId) => {

        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type:ELIMINAR_PROYECTO,
                payload:proyectoId
            })
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <proyectoContext.Provider  //Este es el provider, que en context normal va en el archivo NombreContext, es decir acá iría en el archivo proyectoContext,
            //pero como estamos usando useReducer va en el State
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario, //valor que pasamos para que este disponible
                errorformulario: state.errorformulario,
                proyecto: state.proyecto, //array de proyecto (en rigor solo tiene uno, el proyectoActual que es el q selecciona el usuario. Esto lo diictó el return del reducer)
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;
