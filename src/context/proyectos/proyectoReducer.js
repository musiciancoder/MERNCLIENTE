//el reducer usando useReducer es similar al de redux, pero a diferencia de este NO contiene un estado inicial (que con useReducer esta en el state)
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO} from "../../types";

export default (state, action) =>{
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true //para que se muestre el formulario
            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload //actualizacion de estado para proyectos
            }
        case AGREGAR_PROYECTO:
       return{
           ...state,
           proyectos: [...state.proyectos, action.payload],
           formulario: false  //para que se oculte el formulario luego de agreagar proyecto nuevo

}
        default:
            return state;
    }
}
