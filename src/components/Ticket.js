import React, {Component} from 'react';
import VarDesayunoController from '../components/DesayunoController';
import { observer } from 'mobx-react';



class Ticket extends Component{
    render(){
        let FoodTicket = [];

        const AddFoodTicket = VarDesayunoController.breakfasts;

        AddFoodTicket.forEach(
            (element, id) => {/*funcion realiza el llenado del ticket cuando catidad >=1 */
            if(element.quantity!=0){ /*solo se agrega al ticket, si cantidad es distinta de 0*/
            FoodTicket.push(
            <div className= "list-group-item" key={id}>
                <div className="panel-body">

                <h4>{element.item}</h4><br/>
                    <div className="APriceQuantity">
                       <span>Cantidad: {element.quantity}</span>
                       <span className="PriceFood">Precio: {element.quantity*element.price}</span>  
                    </div>

                </div>
            </div>
            )
          } 
       })/*fin forEach*/

        return(
            <div >
                <div>
                  <h3 className="title-section">Ticket</h3>
                    <div className="panel panel-success">
                        <div className="list-group Ticket-Menu">                        
                            {FoodTicket}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default observer(Ticket);
