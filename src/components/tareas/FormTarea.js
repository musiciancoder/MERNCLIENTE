import React, {useContext} from 'react';
import ProyectoContext from "../../context/proyectos/proyectoContext";


const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;

    //Si no hay proyecto seleccionado no muestra el formulario de tareas
    if (!proyecto) return null;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nombre"/>
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        //value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                        value="agregar valor"
                    />
                </div>

            </form>
        </div>
    );
}

export default FormTarea;
