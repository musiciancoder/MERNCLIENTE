import axios from 'axios';


//Variable auxiliar, se ocupa en los archivo State, donde se hacen peticiones backend
const clienteAxios = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL //variable entorno
});

export default clienteAxios;
