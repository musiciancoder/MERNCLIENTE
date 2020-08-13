import React, {Fragment} from "react";
import FormTarea from "./FormTarea";
import Tarea from './Tarea';

const tareasProyecto = [
    {nombre: 'Elegir plataforma', estado: true},
    {nombre: 'Elegir colores', estado: false},
    {nombre: 'Elegir plataforma de pago', estado: false},
    {nombre: 'Elegir hosting', estado: true}
]

const ListadoTareas = () => {
    return (
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>
            <ul className="listado-tareas"></ul>
            {tareasProyecto.length===0 ? (<li className="tarea"><p>No hay tareas</p></li>) : tareasProyecto.map(tarea =>(
                <Tarea
                    tarea={tarea}
                    />
                        ))}
        </Fragment>
    );
}

export default ListadoTareas;
