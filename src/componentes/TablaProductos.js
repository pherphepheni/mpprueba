import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Productos from './Productos';

import {listarProductosAction} from '../actions/listarProductosAction';

export default function TablaProductos(){

    const dispatch = useDispatch();
 
    useEffect(
        ()=>{
        const mostrarProductos =  () =>dispatch(listarProductosAction());
        mostrarProductos()
    },[dispatch]
    ) 
    const productos = useSelector( state=>state.productos.productos);
    
    return(
        <div className="col-md-8 m-auto">
            
        <table className="table table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <Productos
                        productos={productos}
                    />
                </tbody>
        </table>

        </div>
    )
}