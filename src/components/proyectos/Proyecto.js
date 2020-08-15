import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {

    //Obtener el state de proyectos por medio de Context (el estado de formulario se encuentra en proyectoState)
    const proyectosContext = useContext(ProyectoContext);
    //destructuring (fn tipo "Action" de refux, ya que contiene type).
    const {proyectoActual} = proyectosContext;


    return(
        <li>
            <button
                type="button"
                className="btn btn-blank"
                //para seleccionar por id el proyecto que clickamos
            onClick={()=>proyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}

export default Proyecto;
