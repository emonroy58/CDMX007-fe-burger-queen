import React, {Component} from 'react';
import VarDesayunoController from '../components/DesayunoController';
import FoodDesayunoController from '../components/DesayunoController';
import { observer } from 'mobx-react';
import { Button} from 'reactstrap';
import db from './../FirestoreConfig';


class Ticket extends Component{

  action=()=>{
    const AddFoodTicket = VarDesayunoController.breakfasts;
   // const {inputValue}= this.state;
            
    AddFoodTicket.forEach(
        (element, id) => {/*funcion realiza el llenado del ticket cuando catidad >=1 */
                 
       if(element.quantity !==0 ){ /*solo se agrega al ticket, si cantidad es distinta de 0*/
        
        db.collection('foods').add({
            name:element.item,
            quantity: element.quantity,
            price: element.quantity*element.price,

        }).then( ()=>{
            console.log('Agregado');
            
        }).catch( ()=>{
            console.log('error');
            
        })           
        
     }  
     
          
   })/*fin forEach*/     

}

  
 
    render(){
      let foodGral = [];
        let FoodTicket = [];   
        let TotalToket = [];
        let k;
        let totalFoodTick=0;

        let Food = [];   
        let Total = [];
        let i;
        let totalFood=0;

        let FoodAdd = [];   
       let TotalAdd = [];
       let j;
       let totalAdd=0;

        const AddFoodTicket = VarDesayunoController.breakfasts;
                
        AddFoodTicket.forEach(
            (element, id) => {/*funcion realiza el llenado del ticket cuando catidad >=1 */
                     
           if(element.quantity !==0 ){ /*solo se agrega al ticket, si cantidad es distinta de 0*/
            TotalToket.push(
              element.quantity*element.price
            )
            foodGral.push(
              element.item, element.quantity, (element.quantity*element.price)
            )
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
            )/*fin push*/
            
         }  
         
              
       })/*fin forEach*/
       
       

       
      for(k in TotalToket){
        totalFoodTick =totalFoodTick+parseInt(TotalToket[k]);//Ahora que es un objeto javascript, tiene propiedades
      }
      

       const AddFood = FoodDesayunoController.hamburger;

        AddFood.forEach(
                        
            (element, id) => {/*funcion realiza el llenado del ticket cuando catidad >=1 */
                console.log(element.check_hamb_simple);
                if(element.check_hamb_simple!==false){ /*solo se agrega al ticket, si cantidad es distinta de 0*/
            Total.push(
              element.pricehamburguer
            )
            foodGral.push(
              element.type_hamb_simple, element.ingredient, element.pricehamburguer
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
       console.log(foodGral);
       

       const Adddrinks = FoodDesayunoController.drinks_additional;/*funcion bebidas */

       Adddrinks.forEach(
           (element, id) => {/*funcion realiza el llenado del ticket cuando catidad >=1 */
           if(element.quantity_add!==0){ /*solo se agrega al ticket, si cantidad es distinta de 0*/
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
        totalAdd =totalAdd+parseInt(TotalAdd[j]);//Ahora que es un objeto javascript, tiene propiedades
        
    
  }         

      let pago = totalAdd +totalFood+ totalFoodTick;
      
      



        return(
            <div >
            
                <div>
                  <h3 className="title-section">Ticket</h3>
                    <div className="panel panel-primary">
                        <div className="list-group Ticket-Menu">                        
                            {FoodTicket}
                            {Food}
                            {FoodAdd}
                         <span>Total $: {pago}.00</span>  
                        </div>
                        <Button color ="info" onClick={this.action}>
                        Agregar Orden
                    </Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default observer(Ticket);
