import React, {useReducer } from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import uuid, { v4 as uuidv4 } from "uuid";


import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_tAREA,
} from "../../types";

const TareaState = props => {
    const initialState = {
      tareas: [
        { id:1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
        { id:2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
        { id:3, nombre: "Elegir Plataformas de Pago", estado: true, proyectoId: 3 },
        { id:4, nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
        { id:5, nombre: "Elegir Hosting Heroku", estado: false, proyectoId: 1 },
        { id:6, nombre: "Elegir Plataformas de Pago", estado: true, proyectoId: 2 },
        { id:7, nombre: "Elegir Hosting", estado: false, proyectoId: 3 },
        { id:8, nombre: "Elegir Hosting Heroku", estado: true, proyectoId: 4 },
      ],
      tareasproyecto: null,
      errortarea: false,
      tareaseleccionada: null
    };
    //Crear dispatch y state
    const [state,dispatch] = useReducer(TareaReducer,initialState);
    
    //funciones

    //tareas de un proyecto

    const obtenerTareas = proyectoId => {
        dispatch({
          type: TAREAS_PROYECTO,
          payload: proyectoId
        })
    }

    //Agregar tarea seleccionada
    const agregarTarea = tarea =>{
       tarea.id = uuidv4(); 
      dispatch({
        type: AGREGAR_TAREA,
        payload: tarea 
      })
    }
    //valdia y muestra un error en caso de ser necesario
    const validarTarea = () =>{
      dispatch({
        type: VALIDAR_TAREA
      });
    }
    //Elimnar tarea por id
    const eliminarTarea = id => {
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id
      })
    }
    //cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea =>{
      dispatch({
        type: ESTADO_TAREA,
        payload: tarea
      })
    }
    //extrae una tarea para edicion
    const guardarTareaActual = tarea => {
      dispatch({
        type: TAREA_ACTUAL,
        payload: tarea
      });
    }
    //edita o modifica una tarea
    const actualizarTarea = tarea =>{
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: tarea
      });
    }
    //eliminar tarea seleccionada
    const limpiarTarea = () =>{
      dispatch({
        type: LIMPIAR_tAREA,
      });
    }
    return (
      //se va  apropagar en los demas
      <TareaContext.Provider
        value={{
          tareas: state.tareas,
          tareasproyecto: state.tareasproyecto,
          errortarea: state.errortarea,
          tareaseleccionada: state.tareaseleccionada,
          obtenerTareas,
          validarTarea,
          agregarTarea,
          eliminarTarea,
          cambiarEstadoTarea,
          guardarTareaActual,
          actualizarTarea,
          limpiarTarea
        }}
      >
        {props.children}
      </TareaContext.Provider>
    );
}

export default TareaState;