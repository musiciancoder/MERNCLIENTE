import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";
import AlertaState from "./context/alertas/alertaState"
import AuthState from "./context/autenticacion/authState";
import tokenAuth from "./config/token";
import RutaPrivada from "./components/rutas/RutaPrivada";

//Proyecto iniciado con react-router-dom
function App() {

    //Revisar si tenemos un token de autenticacion
    const token = localStorage.getItem('token');
    if (token) {
        tokenAuth(token); //enviar token via headers
    }

    console.log(process.env.REACT_APP_BACKEND_URL); //Prueba variable entorno desarrollo

    return (
        //Esto equivale al <NombreProvider> del context normal
        <ProyectoState>
            <TareaState>
                <AlertaState>
                    <AuthState>
                    <Router>

                        <Switch>

                            <Route exact path="/" component={Login}/>
                            <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
                            {/*RutaPrivada es higher order component, para que al acceder a "/proyectos" exija las credenciales del usuario;
                            Con esto la idea es que cuando escribamos la url http://localhost:3000/proyectos nos enviará a autenticarnos si no lo estamos*/}
                            <RutaPrivada exact path="/proyectos" component={Proyectos}/>

                        </Switch>

                    </Router>
                    </AuthState>
                </AlertaState>
            </TareaState>
        </ProyectoState>
    );
}

export default App;
