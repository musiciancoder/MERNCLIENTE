import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA
} from "../../types";


export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: action.payload //estos son los resultados ya filtrados por la api
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareasproyecto: [action.payload, ...state.tareasproyecto], //action.payload esta primero para que se muestre primero la tarea que acabamos de agregar
                errortarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload)

            }
        case ACTUALIZAR_TAREA: //para editar una tarea
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea )
            }
  /*      case ESTADO_TAREA: //botones completo, incompleto
            return {
                ...state,
                //deja igual todas las otras tareas, excepto la que estamos editando
                tareasproyecto: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea) //action.payload.id porque en el state estamos pasando la tarea completa como parametro
            } */
        case TAREA_ACTUAL: //al hacer click en boton "editar", se debe verificar un cambio en el state de esa tarea en Context.Provider
            return {
                ...state,
                tareaseleccionada: action.payload //el payload es la tarea completa que se obtiene al hacer click en boton editar en Tarea.js
            }
        case LIMPIAR_TAREA :
            return {
                ...state,
                tareaseleccionada: null
            }


        default:
            return state;
    }
}
