import React, {Fragment, useContext} from "react";
import FormTarea from "./FormTarea";
import Tarea from './Tarea';

import ProyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {

//Obtener el state de proyectos por medio de Context (el estado de formulario se encuentra en proyectoState)
const proyectosContext = useContext(ProyectoContext);
//destructuring (fn tipo "Action" de refux, ya que contiene type).
const {proyecto, eliminarProyecto} = proyectosContext;

//Si no hay proyecto seleccionado
if (!proyecto) return <h2>Selecciona un proyecto</h2>;


//Array destructuring para extraer el proyecto actual ( el proyecto que clickamos )
const [proyectoActual] = proyecto;

const tareasProyecto = [/*
    {nombre: 'Elegir plataforma', estado: true},
    {nombre: 'Elegir colores', estado: false},
    {nombre: 'Elegir plataforma de pago', estado: false},
    {nombre: 'Elegir hosting', estado: true}*/
];

//Elimina un proyecto
    const  onClickEliminar= () => { //se ejecuta al hacer click en boton eliminar
        eliminarProyecto(proyectoActual.id); // proyectoActual es el proyecto que clickamos
    }


    return (
        <Fragment>
            {/*Con esto se renderiza el nombre del proyecto que estamos clickando*/}
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? (
                    <li className="tarea"><p>No hay tareas</p></li>) : tareasProyecto.map(tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                ))}
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
