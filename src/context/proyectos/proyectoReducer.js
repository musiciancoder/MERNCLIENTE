//el reducer usando useReducer es similar al de redux, pero a diferencia de este NO contiene un estado inicial (que con useReducer esta en el state)
import {
    FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL, ELIMINAR_PROYECTO, PROYECTO_ERROR
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true //para que se muestre el formulario
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload //actualizacion de estado para proyectos
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,  //para que se oculte el formulario luego de agreagar proyecto nuevo
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTUAL :
            return {
                ...state,
                //notar que acá solo estamos mostrando el proyecto actual, no estamos variando nada
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload)
            }
        case ELIMINAR_PROYECTO :
            return {
                ...state,
                //notar que acá son proyectos, porque el array de proyectos va a cambiar
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
                proyecto: null //vuel vo al proyecto a su valor en initialState (null) para q no haya un proyecto activo (seleccionado)
            }
        case PROYECTO_ERROR:
            return {
                ...state,
                mensaje: action.payload //la alerta de error
            }

            default:
            return state;
    }
}
