import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from "../../context/tareas/tareaContext";


const Proyecto = ({proyecto}) => {

    //Obtener el state de proyectos por medio de Context (el estado de formulario se encuentra en proyectoState)
    const proyectosContext = useContext(ProyectoContext);
    //destructuring (fn tipo "Action" de refux, ya que contiene type).
    const {proyectoActual} = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const {obtenerTareas} = tareasContext;

    //fn para agregar el proyecto actual
    const seleccionarProyecto = (id) => {
        proyectoActual(id); //Se ejecuta la fn proyectoActual q selecciona el proyecto q el usuario clicka
        obtenerTareas(id);//Filtrar las tareas cuando se dé click
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                //para seleccionar por id el proyecto que clickamos
                onClick={() => seleccionarProyecto(proyecto._id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}

export default Proyecto;
