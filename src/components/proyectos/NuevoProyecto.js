import React, {Fragment, useContext, useState} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //El consumo de un context usando useReducer es normal

    //Obtener el state del formulario por medio de Context (el estado de formulario se encuentra en proyectoState)
    const proyectosContext = useContext(ProyectoContext);
    //destructuring formulario. La idea es q el formulario se muestre en pantalla solo si esta como true
    const {formulario} = proyectosContext;


    //State para proyecto
    const [proyecto, guardarProyecto] = useState ({
        nombre: ''
    });

    //Extraer nombre de proyecto
    const {nombre} = proyecto;



    //fn se ejecuta al escribir en el input (probar en RDT)
    const onChangeProyecto = (e) => {
        guardarProyecto({ //cambio de estado para proyecto
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario envía un proyecto con boton submit
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //Validar el proyecto

        //Agregar el state

        //Reiniciar el formulario

    }

    return(
        <Fragment>
        <button
        type="button"
        className="btn btn-block btn-primario"
        >NuevoProyecto</button>

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
