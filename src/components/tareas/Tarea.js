import React, {useContext} from 'react';
import tareaContext from "../../context/tareas/TareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({tarea}) => {

  //Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

  //obtener context tarea
  const tareasContext = useContext(tareaContext);
  const {
    eliminarTarea,
    obtenerTareas,actualizarTarea,
    guardarTareaActual,
  } = tareasContext;

//Funcion que modifica el estado de las tareas
const cambiarEstado = tarea =>{
    if(tarea.estado){
      tarea.estado = false;
    }else{
      tarea.estado = true;
    }
    actualizarTarea(tarea);
}

  //extraer el proyecto
  const [proyectoActual] = proyecto;
  //funcion que se ejecuta al eliminar
  const tareaEliminar = id =>{
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual.id)

  }
  //agrega una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = tarea =>{
    guardarTareaActual(tarea);
  }
    return (
      <ll className="tarea sombra">
        <p>{tarea.nombre} </p>
        <div className="estado">
          {tarea.estado ? (
            <button type="button" className="completo" onClick={()  => cambiarEstado(tarea)}>
              Completo
            </button>
          ) : (
            <button type="button" className="incompleto" onClick={()  => cambiarEstado(tarea)}>
              Incompleto
            </button>
          )}
        </div>
        <div className="acciones">
          <button type="button" className="btn btn-primario" onClick={() => seleccionarTarea(tarea)}>
            Editar
          </button>
          <button
            type="button"
            onClick={() => tareaEliminar(tarea._id)}
            className="btn btn-secundario"
          >
            Eliminar
          </button>
        </div>
      </ll>
    );
}
 
export default Tarea;