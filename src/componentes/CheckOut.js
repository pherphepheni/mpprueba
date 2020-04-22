import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {listarProductosAction} from '../actions/listarProductosAction';
import clienteAxios from 'axios';


function CheckOut(){
    
const dispatch = useDispatch();    
 useEffect(
     ()=>{
         const productos = ()=>dispatch(listarProductosAction());
         productos()
     },[dispatch]
 )
  

const producto = useSelector( state => state.productos.productos)
if(!producto) return null
console.log(producto);

const btnMercadoPago = (e) =>{
    e.preventDefault();
    clienteAxios.post(`http://localhost:4000/productos`)
    .then(res=>{
        return(
                         <script
                            src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
                            data-public-key="TEST-fef34835-9bf5-4459-860c-33fb75c59832"
                            data-transaction-amount="9000.00">
                        </script>
        )
                        
    })

}        
 

    return(
        <div>
            <h2>CheckOut</h2>
            <div className="col-md-6 m-auto">
            <div>
                <form onSubmit={btnMercadoPago}>
                <button type="submit" className="btn btn-success">Pagar</button>
                </form>
            </div>
            
                {producto.map(prod=>(
                              <div className="card border-secondary mb-3 mt-5">
                              <div className="card-header"><h3 className="text-center font-weight-bold text-uppercase">{prod.title}</h3></div>
                                  <div className="card-body">
                                      <ul className="list-group list-group-flush">
                                      <li className="list-group-item font-weight-bold">Precio: ${prod.unit_price} </li>
                                      <li className="list-group-item font-weight-bold">Cantidad disponible: {prod.quantity}</li>
                                      </ul>
                                  </div>
                          </div>
                ))}
            </div>
        </div>
    )
}

export default CheckOut;