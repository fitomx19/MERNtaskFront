import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener context tarea
  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    errortarea,
    obtenerTareas,
    limpiarTarea,
    actualizarTarea,
  } = tareasContext;
  
  //Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);
  
  //State del formulario

  const [tarea, guardarTarea] = useState({
    nombre: ''
  })

  //extraer el nombre del proyecto
  const {nombre} = tarea;

  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Leer los valores del formulario

  const handleChange = e =>{
    guardarTarea({
      ...tarea,
      [e.target.name] : e.target.value
    })
  }
  const onSumbit = e => {
    e.preventDefault();

    //validar
    if(nombre.trim() === ''){
      validarTarea();
      return;
    }
    //si es edicion o si es nueva tarea
    if(tareaseleccionada === null){ 
      //agregar la nueva tarea al state de tareas
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);

    }else{
      //actualizar tarea existente
      actualizarTarea(tarea);

      //elimina tarea slecciona del state

      limpiarTarea();
    }

    //pasar la validacion

    
    //oBTENER Y FILTRAR TAREAS PROYECTO ACTUAL
    obtenerTareas(proyectoActual.id);
    //reiniciar el form
    guardarTarea({
      nombre: ''
    })
  }
    return (
      <div className="formulario">
        <form onSubmit={onSumbit}>
          <div className="contenedor-input">
            <input
              type="text"
              className="input-text"
              placeholder="Nombre tarea..."
              name="nombre"
              value={nombre}
              onChange={handleChange}
            ></input>
          </div>

          <div className="contenedor-input">
            <input
              type="submit"
              className="btn btn-primario btn-submit btn-block"
              value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
            />
          </div>
        </form>
        {errortarea ? <p className="mensaje error">Mensaje de la tarea es obligatorio</p> : null}
      </div>
    );
}
 
export default FormTarea;