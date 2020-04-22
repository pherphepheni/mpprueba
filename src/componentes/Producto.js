import React,{useEffect} from 'react';

import {useDispatch,useSelector} from 'react-redux';
import {mostrarProductoAction} from '../actions/mostrarProductoAction';

export default function Producto({match}){

    const dispatch = useDispatch();

    const productoSeleccionado = useSelector( state => state.productos.producto);
   
    const {id} = match.params;

    useEffect(
        ()=>{
            dispatch(mostrarProductoAction(id))
         },[dispatch,id]
    )
       
    if(!productoSeleccionado) return null
    return(
      <div className="col-md-6 m-auto">
            <div className="card border-secondary mb-3 mt-5">
                <div className="card-header"><h3 className="text-center font-weight-bold text-uppercase">{productoSeleccionado.title}</h3></div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item font-weight-bold">Precio: ${productoSeleccionado.unit_price}</li>
                            <li className="list-group-item font-weight-bold">Cantidad disponible: {productoSeleccionado.quantity}</li>
                        </ul>
                    </div>
            </div>
      </div>
     
    )}
   