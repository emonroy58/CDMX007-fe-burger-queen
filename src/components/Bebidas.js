import React, {Component} from 'react';
import '../styles/Bebidas.css';
import { Card, Row, Col, CardImg, CardTitle} from 'reactstrap';
import VarDesayunoController from '../components/DesayunoController.js';
import Adicionales from '../components/Adicionales.js'
import Quantity from '../components/Quantity.js';


let drinkElement = [];
/*variable para tener acceso al arreglo*/
const addArraydrink = VarDesayunoController;
/*funcion que recorre array para traer elemntos*/
addArraydrink.drinks_additional.forEach((element,id) => (
    drinkElement.push(
        
        <div className = "list-group-item" key={id}>
            <div className= "panel-body ">

            <Row>
              <Col m="6">
              <Card body>   
                   <h2> <CardTitle>{element.add_name}</CardTitle> </h2>                
                    <CardImg className = "ImageBebidas"  src={element.image_add} alt="ham-Simple"  />
                   
                      <Quantity  price = {element.price_add}  index = {id}
                        sendOrder= {(indexFood, eventQuantityFood)=>
                            {VarDesayunoController.sendCheckBebidas(indexFood,eventQuantityFood)}
                      }/>

                   
                    </Card>
                </Col>
                </Row>  
                     
                
            </div>
           
        </div>

        )
    )
)
class Bebidas extends Component{  /*clase Desayuno que va a heresar coponent*/
    render(){
        return(
                <div >
                    <div> 
                    <h3 className="title-section">Complementos Adicionales</h3>
                        <div className = "panel panel-primary">
                            <div className= "list-group Desayuno-Menu">
                                {drinkElement}
                            </div>
                         </div>
                    </div>
                </div> 
            );
    }
    
}

export default Bebidas;
