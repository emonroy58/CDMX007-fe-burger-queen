import React, { Component } from 'react';
import '../styles/Desayuno.css';
import  VarDesayunoController from '../components/DesayunoController.js';
import Quantity from '../components/Quantity.js';
import Bienvenida from './Bienvenida';



/* array que guardara loe desayunos del objeto que se encuentra en DesayunoController*/
let breakfastElement = [];
/*variable para tener acceso al arreglo*/
const addArraybreakfast = VarDesayunoController;
/*funcion que recorre array para traer elemntos*/
addArraybreakfast.breakfasts.forEach((value,id) => (
    breakfastElement.push(

        <div className = "list-group-item" key={id}>
            <div className= "panel-body ">
                <img role= "presentation" src={ value.image } className = "ImageBreakfast" alt="Imagen Desayuno"/>
                <h3 className="TitleBreakfast">{value.item}</h3>
                <Quantity  price = {value.price}  index = {id}
                    sendOrder= {(indexFood, eventQuantityFood)=>
                        {VarDesayunoController.sendQuantityTicked(indexFood,eventQuantityFood)}
                }/>
            </div>
        </div>

        )
    )
)

class Desayuno extends Component{  /*clase Desayuno que va a procesar component*/
    render(){
        return(
            <Bienvenida>
                <div >
                    <div> 
                    <h3 className="title-section">Desayuno</h3>
                        <div className = "panel panel-primary">
                            <div className= "list-group Desayuno-Menu">
                                {breakfastElement}
                                
                            </div>
                         </div>
                    </div>
                </div> 
            </Bienvenida>
            
         );
    }
    
}

export default Desayuno;