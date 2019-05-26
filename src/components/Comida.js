import React, { Component } from 'react';
import '../styles/Comida.css'
import { Card, Row, Col, CardImg, CardTitle} from 'reactstrap';
import  VarDesayunoController from '../components/DesayunoController.js';
import CardHamburguer from '../components/Card_haburguer';
import Supplement from '../components/Supplements';
import Bienvenida from './Bienvenida';
import './../styles/Bienvenida.css'



/* array que guardara loe desayunos del objeto que se encuentra en DesayunoController*/
let foodElement = [];
/*variable para tener acceso al arreglo*/
const addArrayfood = VarDesayunoController;
/*funcion que recorre array para traer elemntos*/
addArrayfood.hamburger.forEach((element,id) => (
    foodElement.push(

        <div className = "list-group-item" key={id}>
            <div className= "panel-body ">
            <Row>
              <Col sm="6">
                    <Card body>   
                    <CardTitle>{element.type_hamb_simple}</CardTitle>                 
                    <CardImg top width="50%" src={element.imageFood} alt="ham-Simple"  />
                    <CardHamburguer  index ={id}  
                        sendCheck= {(indexFood, eventCheckFood)=>
                        {VarDesayunoController.sendTicked(indexFood,eventCheckFood)}
                }

                sendRadio= {(indexFood, eventRadioFood)=>
                        {VarDesayunoController.sendRadioTicked(indexFood,eventRadioFood)}
                }
             /> 

                    <label className="PriceHamburguer-Simple">Precio: ${element.pricehamburguer}.00 </label>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                    <CardImg clasName="image-supplemet"  top width="50%" src="https://i.ibb.co/FzjNHKh/suplementos.jpg" alt="ham-Supllemnt"  />
                    <Supplement index ={id}
                        sendCheckSupplement= {(indexFood, eventSuppValue, eventSuppCheck)=>
                        {VarDesayunoController.sendSupplement(indexFood,eventSuppValue, eventSuppCheck)}
                }/>
                    </Card>
                </Col>
                </Row>           
               
            </div>
        </div>

        )
    )
)

class Comida extends Component{  /*clase Desayuno que va a heresar coponent*/
    render(){
        return(
              <Bienvenida>
                <div >
                    <div> 
                    <h3 className="title-section">Comida</h3>
                        <div className = "panel panel-primary">
                            <div className= "list-group Desayuno-Menu">
                                {foodElement}
                            </div>
                         </div>
                    </div>
                </div> 
              </Bienvenida>
                
            );
    }
    
}

export default Comida;