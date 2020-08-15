import React, {useContext, useEffect} from 'react';
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {


    //Extraer proyectos desde el context (en proyectoState)
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

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


    },[] );

    //Revisar si proyectos tiene contenido
    if(proyectos.length===0) return null;




    return(

        <ul className="listado-proyectos">
        {proyectos.map(proyecto => (
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
            />
                ) )}
        </ul>

    );
}

export default ListadoProyectos;
