import React, { Fragment,useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/TareaContext";
import {CSSTransition, TransitionGroup} from 'react-transition-group';



const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;
    //obtener context tarea
    const tareasContext = useContext(tareaContext);
    const {tareasproyecto} = tareasContext;
    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;


    //elimina un  proyecto
    const onClickEliminar = () => {
      eliminarProyecto(proyectoActual._id)
    }
    return (
      <Fragment>
        <h2>Proyecto: {proyectoActual.nombre} </h2>
        <ul className="listado-tareas">
          {tareasproyecto.lenght === 0 ? (
            <li className="tarea">No hay tareas</li>
          ) : (
            <TransitionGroup>
              {tareasproyecto.map(tarea => (
                <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                  <Tarea tarea={tarea} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </ul>
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={onClickEliminar}
        >
          Eliminar Proyecto &times;
        </button>
      </Fragment>
    );
}
 
export default ListadoTareas;