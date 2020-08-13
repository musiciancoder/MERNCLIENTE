import {createContext} from 'react';

const proyectoContext = createContext();

export default proyectoContext;

//Con respecto a Context normal: a este archivo le falta todito el Provider (que está en el state en este caso, ya q usamos useReducer)
