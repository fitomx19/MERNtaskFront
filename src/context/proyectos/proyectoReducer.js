import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  
} from "../../types";

//SOlo cambia el state
export default (state, action) => {
    switch(action.type){
       
       case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
        return{
            ...state,
            proyectos: action.payload
        }
       case AGREGAR_PROYECTOS:
           return {
             ...state,
             proyectos: [...state.proyectos, action.payload],
             formulario: false,
             errorformulario: false
           };
           case VALIDAR_FORMULARIO:
               return {
                 ...state,
                 errorformulario: true
               };
            case PROYECTO_ACTUAL:
              return{
                ...state,
                proyecto: state.proyectos.filter(
                proyecto => proyecto.id === action.payload)
                  //hace una iteracion y compara el id y crea un nuevo arreglo llamado proyecto

              }
             case ELIMINAR_PROYECTO:
                return {
                  ...state,
                  proyectos: state.proyectos.filter(
                  (proyecto) => proyecto.id !== action.payload),
                  proyecto: null
                }
             

        default:
            return state;
    }
}