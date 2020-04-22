import {MOSTRAR_PRODUCTO,MOSTRAR_PRODUCTO_ERROR} from '../types/types';
import clienteAxios from '../config';

export function mostrarProductoAction(id){
   return(dispatch)=>{
       clienteAxios.get(`http://localhost:4000/productos/${id}`)
       .then(res=>{
            dispatch(mostrarProducto(res.data))
       })
       .catch(error =>{
           dispatch(mostrarProductoError(error))
       }) 
    } 
}

export const mostrarProducto =(producto) =>({
    type : MOSTRAR_PRODUCTO,
    payload : producto
})

export const mostrarProductoError = (error) =>({
    type : MOSTRAR_PRODUCTO_ERROR,
    payload : error
})