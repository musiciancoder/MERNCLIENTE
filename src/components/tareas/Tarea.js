import React, {useContext} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import ProyectoContext from "../../context/proyectos/proyectoContext";


const Tarea = ({tarea}) => { //{tarea} desde ListadoTareas

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;

    //Obtener el state por medio de context
    const tareasContext = useContext(TareaContext);
    const {eliminarTarea, obtenerTareas, cambiarEstadoTarea} = tareasContext;

    //Extraer el proyecto
    const [proyectoActual] = proyecto;

    //Fn q se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = (id) => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
        // obtenerTareas(proyecto[0].id); //forma alternativa a  la linea anterior
    }

    //Fn q modifica el estado de las tareas (se llama al apretar botones "completo" o "incompleto" mas abajo
    const cambiarEstado = (tarea) => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

        return (
            <li className="tarea sombra">
                <p>{tarea.nombre}</p>

                <div className="estado">
                    {tarea.estado ?
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => cambiarEstado(tarea)}
                            >Completo</button>
                        )
                        :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)}
                            >Incompleto</button>
                        )

                    }
                </div>

                <div className="acciones">
                    <button
                        type="button"
                        className="btn-primario"
                    >Editar
                    </button>
                    <button
                        type="button"
                        className="btn-secundario"
                        onClick={() => tareaEliminar(tarea.id)}
                    >Eliminar
                    </button>
                </div>
            </li>
        );
    }


export default Tarea;
