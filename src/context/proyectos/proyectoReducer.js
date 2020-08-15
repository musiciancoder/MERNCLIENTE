//el reducer usando useReducer es similar al de redux, pero a diferencia de este NO contiene un estado inicial (que con useReducer esta en el state)
import {FORMULARIO_PROYECTO} from "../../types";

export default (state, action) =>{
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true //para que se muestre el formulario
            }
        default:
            return state;
    }
}
