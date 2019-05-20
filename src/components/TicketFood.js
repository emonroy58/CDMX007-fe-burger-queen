import React, {Component} from 'react';
import FoodDesayunoController from '../components/DesayunoController';
import { observer } from 'mobx-react';


class TicketFood extends Component{
    render(){
        let Food = [];   
        let Total = [];
        let i;
        let totalFood=0;

        let FoodAdd = [];   
       let TotalAdd = [];
       let j;
       let totalAdd=0;

        const AddFood = FoodDesayunoController.hamburger;

        AddFood.forEach(
                        
            (element, id) => {/*funcion realiza el llenado del ticket cuando catidad >=1 */
                console.log(element.check_hamb_simple);
                if(element.check_hamb_simple!=false){ /*solo se agrega al ticket, si cantidad es distinta de 0*/
            Total.push(
              element.pricehamburguer
            )
            Food.push(                  
            <div className= "list-group-item" key={id}>
                <div className="panel-body">
                   <h4>{element.item}</h4><br/>
                    <div className="APriceQuantity">
                       <span>Orden : {element.type_hamb_simple}</span> <br></br>    
                       <span>Ingrediente: {element.ingredient}</span> <br></br>                    
                       <span className="PriceFood">Precio: {element.pricehamburguer}</span>                                            
                    </div>

                </div>
                <div className= "list-group Supplement" >
                    <div className="panel-body">
                        <span>Suplementos: </span> <br></br>
                        <span>{element.suppl_one.supp_ingred} </span> <br></br>
                        <span>{element.suppl_two.supp_ingred_two} </span> <br></br>
                        <span>{element.suppl_three.supp_ingred_three} </span> <br></br>
                        <span>{element.suppl_for.supp_ingred_for} </span> <br></br>
                        <span>{element.suppl_five.supp_ingred_five} </span> <br></br>
                        <span>{element.suppl_six.supp_ingred_six} </span> <br></br>
                    </div>
                </div>
               
            </div>            
            )/*fin push*/
            
         }   
                    
       })/*fin forEach*/
           
      for(i in Total){
        totalFood =totalFood+parseInt(Total[i]);//Ahora que es un objeto javascript, tiene propiedades
      }
       //console.log(totalFood);
    
       

       const Adddrinks = FoodDesayunoController.drinks_additional;/*funcion bebidas */

       Adddrinks.forEach(
           (element, id) => {/*funcion realiza el llenado del ticket cuando catidad >=1 */
           if(element.quantity_add!=0){ /*solo se agrega al ticket, si cantidad es distinta de 0*/
           TotalAdd.push(
             element.quantity_add*element.price_add
           )
           FoodAdd.push(                  
           <div className= "list-group-item" key={id}>
               <div className="panel-body">
                  <h4>{element.add_name}</h4><br/>
                   <div className="APriceQuantity">
                      <span>Cantidad: {element.quantity_add}</span>                       
                      <span className="PriceFood">Precio: {element.quantity_add*element.price_add}.00</span>                                            
                   </div>

               </div>
           </div>            
           )/*fin push*/
           
        }   
                   
      })/*fin forEach*/
      for(j in TotalAdd){
        totalAdd =totalAdd+parseInt(TotalAdd[i]);//Ahora que es un objeto javascript, tiene propiedades
      }         

      let pago = totalAdd +totalFood;

        return(
            <div >
                <div>
                  <h3 className="title-section">Ticket</h3>
                    <div className="panel panel-success">
                        <div className="list-group Ticket-Menu">                        
                         {Food}
                         {FoodAdd}
                         <span>Total $: {pago}.00</span>  
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default observer(TicketFood);
