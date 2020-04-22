import {LISTAR_PRODUCTOS,LISTAR_PRODUCTOS_ERROR} from '../types/types';
import clienteAxios from '../config/index';

export function listarProductosAction(){
        return(dispatch)=>{
            clienteAxios.get('/productos')
            .then(res=>{
                dispatch(listarProductos(res.data))
            })
            .catch(error=>{
                dispatch(listarProductosError(error))
            }
            )}  
}

export const listarProductos = (productos) =>({
    type : LISTAR_PRODUCTOS,
    payload: productos
})

export const listarProductosError = (error) =>({
    type: LISTAR_PRODUCTOS_ERROR,
    payload : error
})