import React ,  {useReducer} from 'react';
import uuid, { v4 as uuidv4 } from "uuid";
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";



const ProyectoState = props => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de sitio web" },
    { id: 4, nombre: "Diseño de sitio web progresivo" },
  ]


  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);
  //serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  //Obtener los proyectos

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }
  //agregar nuevo proyecto
   const agregarProyecto = proyecto => {
        proyecto.id = uuidv4(); 
        dispatch({
          type: AGREGAR_PROYECTOS,
          payload: proyecto
                })
                                       }
  //VALIDAR FORMULARIO POR ERRORES
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }
  //sleecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoId =>{
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    });
  }
  //elimina un proyecto
  const eliminarProyecto = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    });
  }
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario, //el state de una palabra miniscula y funciones dos palabras y mayuscula
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;