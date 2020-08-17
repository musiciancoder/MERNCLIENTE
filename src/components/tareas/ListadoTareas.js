import React, {Fragment, useContext} from "react";
import FormTarea from "./FormTarea";
import Tarea from './Tarea';

import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ListadoTareas = () => {

//Obtener el state de proyectos por medio de Context (el estado de formulario se encuentra en proyectoState)
    const proyectosContext = useContext(ProyectoContext);
//destructuring (fn tipo "Action" de refux, ya que contiene type).
    const {proyecto, eliminarProyecto} = proyectosContext;

    //Obtener las tareas de cada proyecto
    const tareasContext = useContext(TareaContext);
    const {tareasproyecto} = tareasContext;

//Si no hay proyecto seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;


//Array destructuring para extraer el proyecto actual ( el proyecto que clickamos )
    const [proyectoActual] = proyecto;


//Elimina un proyecto
    const onClickEliminar = () => { //se ejecuta al hacer click en boton eliminar
        eliminarProyecto(proyectoActual.id); // proyectoActual es el proyecto que clickamos
    }


    return (
        <Fragment>
            {/*Con esto se renderiza el nombre del proyecto que estamos clickando*/}
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea
                                    tarea={tarea}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }

            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto
            </button>

        </Fragment>
    );
}

export default ListadoTareas;
