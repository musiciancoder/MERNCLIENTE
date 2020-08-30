import React, {useContext, useEffect} from 'react';
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import AlertaContext from "../../context/alertas/alertaContext";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const ListadoProyectos = () => {


    //Extraer proyectos desde el context (en proyectoState)
    const proyectosContext = useContext(ProyectoContext);
    const {mensaje, proyectos, obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //Obtener proyectos cuando carga el componente
    useEffect ( () => {
        obtenerProyectos(); //funcion tipo actions definida en el state
        //el uso es el mismo que en REDUX, solo que no se usa la sintaxis con Dispatch

        //en Redux seria:
        /*useEffect( ()=> {

            // Consultar la api
            const cargarProyectos = () => dispatch( obtenerProyectos() );
            cargarProyectos();
            // eslint-disable-next-line
        }, []);*/

        //si hay un error
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria); //recordar q mensaje.msg lo da el backend
        }


    },[mensaje] ); //mensaje aparece en caso que haya algun error

    //Revisar si proyectos tiene contenido
    if(proyectos.length===0) return <p>No hay proyectos, comienza creando uno</p>;

    return(

        <ul className="listado-proyectos">


            { alerta   ? ( <div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>  ) : null  }


            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id} //con uuid proyecto.id, con mongo proyecto._id
                        timeout={250}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>

    );
}

export default ListadoProyectos;
