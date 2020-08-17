import React , {useContext} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/TareaContext";



const Proyecto = ({proyecto}) => {
        //Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;
      //obtener context tarea
      const tareasContext = useContext(tareaContext);
      const {obtenerTareas} = tareasContext;
      //funcion para agregar poryecto actual
      const seleccionarProyecto = id =>{
          proyectoActual(id); //fijar proyecto actual
          obtenerTareas(id); //filtrar las tareas cuando se de click
      }

    return (
      <li>
        <button
          type="button"
          className="btn btn-blank"
          onClick={() => seleccionarProyecto(proyecto._id)}
        >
          {proyecto.nombre}
        </button>
      </li>
    );
}
 
export default Proyecto;