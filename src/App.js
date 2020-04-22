import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './componentes/Header';
import TablaProductos from './componentes/TablaProductos';
import Producto from './componentes/Producto';
import CheckOut from './componentes/CheckOut';


function App() {
  return (
    <Provider store = {store}>
      <div className="container">
    <Router>
      <Header/>
          <Switch>
              <Route exact path={`/`} component={TablaProductos}/>
              <Route exact path={'/productos/checkout'} component={CheckOut}/>
              <Route exact path={`/productos/:id`} component={Producto}/>
              
          </Switch>
    </Router>
        
          
      </div>
    </Provider>
    
  );
}

export default App;
