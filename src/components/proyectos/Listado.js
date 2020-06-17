import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto'
import proyectoContext from "../../context/proyectos/proyectoContext";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const ListadoProyectos = () => {
    
   /*  const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de sitio web'}
    ] */
    //Extraer P´royectos de state inicial

    const proyectosContext = useContext(proyectoContext);
    const { proyectos,obtenerProyectos } = proyectosContext;

     useEffect(() => {
       obtenerProyectos();
       //eslint-disable-next-line
     }, []);
    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;
    
    
   

    return (
      <ul className="listado-proyectos">
        <TransitionGroup>
          {proyectos.map((proyecto) => (
            <CSSTransition key={proyecto.id} timeout={200}  classNames="proyecto"> 
              <Proyecto proyecto={proyecto} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    );
}
 
export default ListadoProyectos;