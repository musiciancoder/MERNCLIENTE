import React, {Fragment, useState} from 'react';

const NuevoProyecto = () => {

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

        </Fragment>
    );
}

export default NuevoProyecto;
