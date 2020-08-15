import React, {Fragment} from "react";
import FormTarea from "./FormTarea";
import Tarea from './Tarea';

const tareasProyecto = [];

const ListadoTareas = () => {
    return (
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>
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
                >Eliminar Proyecto
                </button>

        </Fragment>
    );
}

export default ListadoTareas;
