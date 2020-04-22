import {LISTAR_PRODUCTOS,LISTAR_PRODUCTOS_ERROR, MOSTRAR_PRODUCTO,MOSTRAR_PRODUCTO_ERROR} from '../types/types';

const initialState = {
    productos:[],
    error: '',
    producto:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case LISTAR_PRODUCTOS:
            return{
            ...state,
            productos : action.payload,
            error:false

        }
        case LISTAR_PRODUCTOS_ERROR:
            return{
                ...state,
                productos:[],
                error: action.payload
            }
        case MOSTRAR_PRODUCTO:
            return{
                ...state,
                producto: action.payload,
                error:false

            }
        case MOSTRAR_PRODUCTO_ERROR:
            return{
                ...state,
                productos:[],
                producto:{},
                error : action.payload
            }        
        
        default: 
        return {state}
    }
    
}