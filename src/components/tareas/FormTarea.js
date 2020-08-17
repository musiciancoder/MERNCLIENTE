import React, {useContext} from 'react';
import ProyectoContext from "../../context/proyectos/proyectoContext";


const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;

    //Si no hay proyecto seleccionado no muestra el formulario de tareas
    if (!proyecto) return null;


    //Array destructuring para extraer el proyecto actual ( el proyecto que clickamos )
    const [proyectoActual] = proyecto;

    const onSubmit = (e) => {
        e.preventDefault();

        //validar

        //pasar la validacion

        //agreagar la nueva tarea al state de tarea

        //agregar el form
    }

    return (
        <div className="formulario">
            <form>
                onSubmit={onSubmit}
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
