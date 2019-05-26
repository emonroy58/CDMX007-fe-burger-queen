import React, { Component } from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Desayuno from '../src/components/Desayuno.js';
import Comida from '../src/components/Comida.js';
import Bebidas from '../src/components/Bebidas';
import Home from '../src/components/HomeMenu';
import Historial from './components/OrdersFirestore'
import db from './FirestoreConfig';
import {BrowserRouter, Route} from 'react-router-dom';


class Routes extends Component{

     render(){
        return(
            <div>

            
            <BrowserRouter>
            <div>                      
                  <Route exact path="/" component={Home}></Route> 
                  <Route path="/Desayuno" component={Desayuno}></Route>                      
                  <Route path="/Comida" component={Comida}></Route> 
                  <Route path="/Bebidas" component={Bebidas}></Route> 
                  <Route path="/OrdersFirestore" component={Historial}></Route> 
           </div>
            </BrowserRouter>  

            

            </div> 
        );
    }
    
}

export default Routes;