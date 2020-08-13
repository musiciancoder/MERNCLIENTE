import React from 'react';

const Tarea = ({tarea}) => { //desde ListadoTareas
    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado ?
                    (
                        <button
                            type="button"
                            className="completo"
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
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
                >Eliminar
                </button>
            </div>
        </li>
    );
}

export default Tarea;
