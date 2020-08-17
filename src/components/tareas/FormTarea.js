import React, {useContext, useState} from 'react';
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";


const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;

    //Obtener el state por medio de context
    const tareasContext = useContext(TareaContext);
    //destructuring (fn tipo "Action" de refux, ya que contiene type).
    const {errortarea, agregarTarea, validarTarea, obtenerTareas} = tareasContext;

    //State del formulario para crear tarea
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //Extraer nombre del proyecto
    const {nombre} = tarea;

    //Si no hay proyecto seleccionado no muestra el formulario de tareas
    if (!proyecto) return null;


    //Array destructuring para extraer el proyecto actual ( el proyecto que clickamos )
    const [proyectoActual] = proyecto;

    //Leer los valores del formulario
    const handleChange = (e) => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //validar
        if (nombre.trim()===''){
            validarTarea();
            return;
        }

        //pasar la validacion

        //agreagar la nueva tarea al state de tarea
        //en estado inicial tarea solo tenia el nombre como atributo, ahora le estamos agregando proyectoId, es decir el id del proyecto que se ha clikado
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;//tb se agrega como atributo
        agregarTarea(tarea);

        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id); //con esto agregamos al state del proyecto que hemos seleccionado y se muestra en pantalla la nueva tarea del proyecto en el listado de tareas de ese proyecto

        //reiniciar el form al estado inicial. Con esto cuando enviamos no va a haber nada escrito en el input
        guardarTarea({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >

                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
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

            {errortarea?<p className="error">El nombre de la tarea es obligatorio</p>:null}
        </div>
    );
}

export default FormTarea;
