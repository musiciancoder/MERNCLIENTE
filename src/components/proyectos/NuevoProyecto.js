import React, {Fragment, useContext, useState} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //El consumo de un context usando useReducer es normal

    //Obtener el state del formulario por medio de Context (el estado de formulario se encuentra en proyectoState)
    const proyectosContext = useContext(ProyectoContext);
    //destructuring formulario y funcion mostrarformulario (fn tipo "Action" de refux, ya que contiene type). La idea es q el formulario se muestre en pantalla solo si esta como true
    const {formulario, mostrarFormulario, agregarProyecto} = proyectosContext;


    //State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: '' //inicialmente solo tiene atributo nombre
    });

    //Extraer nombre de proyecto
    const {nombre} = proyecto;


    //fn se ejecuta al escribir en el input (probar en RDT)
    const onChangeProyecto = (e) => {
        guardarProyecto({ //cambio de estado para proyecto
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario envía un proyecto con boton submit
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //Validar el proyecto
        if (nombre === '') {
            return;
        }
        //Agregar el state
        agregarProyecto(proyecto);

        //Resetear el formulario
        guardarProyecto({
            nombre: ''
        })

        //Mostrar el formulario
        //TODO analizar este error en video 202. Agregando la función para mostrar el Formulario
        /*   const onClickFormulario =()=>{
               mostrarFormulario(); //fn tipo "action" de REDUX que retora true o false
           }*/

    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >NuevoProyecto
            </button>

            {
                formulario
                    ?
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}
                        >
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                            />

                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />

                        </form>

                    ) : null
            }

        </Fragment>
    );
}

export default NuevoProyecto;
