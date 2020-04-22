import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <div className="d-flex justify-content-between col-md-8 m-auto">
           <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <Link to={'/'} className="navbar nav-link">Home</Link>
                <h2>Tiendita</h2>
            <Link to={'/products/create'} className="navbar nav-link">Create</Link>
                  
        </div>
      
    )
}