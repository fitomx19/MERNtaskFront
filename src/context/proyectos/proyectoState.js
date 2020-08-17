import React ,  {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
 
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR,
} from "../../types";

import clienteAxios from '../../config/axios';

const ProyectoState = props => {



  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
    mensaje: null
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

  const obtenerProyectos = async () => {
   try {
     const resultado = await clienteAxios.get("/api/proyectos");

     dispatch({
       type: OBTENER_PROYECTOS,
       payload: resultado.data.proyectos,
     });
   } catch (error) {
     const alerta = {
       msg: "Hubo un error",
       categoria: "alerta-error",
     };
     dispatch({
       type: PROYECTO_ERROR,
       payload: alerta,
     });
   }
  }
  //agregar nuevo proyecto
   const agregarProyecto = async proyecto => {
       
      try {
        const resultado = await clienteAxios.post("/api/proyectos", proyecto);
        console.log(resultado);
        dispatch({
          type: AGREGAR_PROYECTOS,
          payload: resultado.data,
        });
      } catch (error) {
        const alerta = {
          msg: "Hubo un error",
          categoria: "alerta-error",
        };
        dispatch({
          type: PROYECTO_ERROR,
          payload: alerta,
        });
      }
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
  const eliminarProyecto = async proyectoId => {
   try {
     await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
     dispatch({
       type: ELIMINAR_PROYECTO,
       payload: proyectoId,
     });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      });
   }
  }
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario, //el state de una palabra miniscula y funciones dos palabras y mayuscula
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mensaje: state.mensaje,
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