import React from 'react';
import {useDispatch} from 'react-redux';
import {listarProductosError} from '../actions/listarProductosAction';
import { Link } from 'react-router-dom';

export default function Productos({productos}){

    const dispatch = useDispatch();
    if(!productos){
        dispatch(listarProductosError());
        return null;
    }
    return(
        productos.map(producto=>(
            <tr key={producto}>          
            <th scope="row">{producto.id}</th>
            <td>{producto.title}</td>
            <td>{producto.unit_price}</td>
            <td>{producto.quantity}</td>
            <Link to={`/productos/${producto.id}`} className="btn btn-info">Ver</Link>
        </tr>
        ))
    )
}

