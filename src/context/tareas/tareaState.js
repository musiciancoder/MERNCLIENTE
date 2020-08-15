import React, {useReducer} from "react";
import TareaContext from "./tareaContext";
import TareaReducer from './tareaReducer';

const  TareaState= (props) => {

    //Estado inicial para tareas
    const initialState = {
        tareas: [],
    }

    //Crear dispatch y state
    const [state,dispatch] = useReducer(TareaReducer, initialState); //se le pasa el reducer y el estado inicial
    
    return (
        <TareaContext.Provider>
            {props.children}
        </TareaContext.Provider>
    )


}

export default TareaState;
