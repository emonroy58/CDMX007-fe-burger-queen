import { extendObservable } from 'mobx';

class DesayunoController {
    
    constructor(){
        extendObservable(this, {
            breakfasts:[
                {
                    id: 'des0001',
                    item: 'Café Americano',
                    image: 'https://i.ibb.co/dJqXbY1/cafe-amer.jpg',
                    price:20,
                    quantity: 0
                },
                {
                    id: 'des0002',
                    item: 'Café con Leche',
                    image: 'https://i.ibb.co/VVvgGSJ/cafe-leche.jpg',
                    price:28,
                    quantity: 0
                },
                {
                    id: 'des0003',
                    item: 'Sandwich de Jamón y Queso',
                    image: 'https://i.ibb.co/q0C9rYG/sandwich.jpg',
                    price:35,
                    quantity: 0
                },
                {
                    id: 'des0004',
                    item: 'Jugo Natural',
                    image: 'https://i.ibb.co/2Zvt75M/jugo-nat.jpg',
                    price:15,
                    quantity: 0
                },
                	
            ],
            hamburger:[
                {id: 'alm0001',
                type_hamb_simple: 'Haburguesa Simple',
                check_hamb_simple: false,
                imageFood: 'https://i.ibb.co/bByzXvd/ham-Simple-2.jpg ',
                ingredient:"Pollo",
                pricehamburguer: 40,
                suppl_one:{
                    supp_edo:false,
                    supp_ingred: ""},
                suppl_two:{
                     supp_edo_two:false,
                     supp_ingred_two: ""},
                suppl_three:{
                        supp_edo_three:false,
                        supp_ingred_three: ""},             
                suppl_for:{
                        supp_edo_for:false,
                        supp_ingred_for: ""}, 
                suppl_five:{
                        supp_edo_five:false,
                        supp_ingred_five: ""},
                suppl_six:{
                    supp_edo_six:false,
                     supp_ingred_six: ""},         
                                 
                },
                
                {
                id: 'alm0002',
                type_hamb_simple: 'Haburguesa Double',
                check_hamb_simple: false,
                imageFood: 'https://i.ibb.co/KqvPKzC/ham-Dob-2.jpg" alt="ham-Double',
                ingredient:"Pollo",
                pricehamburguer: 55,

                suppl_one:{
                    supp_edo:true,
                    supp_ingred: ""},
                suppl_two:{
                     supp_edo_two:true,
                     supp_ingred_two: ""},  

                suppl_three:{
                        supp_edo_three:false,
                        supp_ingred_three: ""},             
                suppl_for:{
                        supp_edo_for:false,
                        supp_ingred_for: ""}, 
                suppl_five:{
                        supp_edo_five:false,
                        supp_ingred_five: ""},
                suppl_six:{
                    supp_edo_six:false,
                     supp_ingred_six: ""},         
                    
                   supplements:['mayonesa', 'mostaza', 'jitomate', 'pepinillo','cebolla','picante','catsup','lechuga'],
                
                   
                }
               
            ],
             drinks_additional:[
                 
                    {
                      id: 'add0001',
                      add_name:'Queso',
                      image_add: "https://i.ibb.co/pL14tvV/queso.jpg",
                      price_add:15,  
                      quantity_add: 0,                      
                   },  
                   
                   {
                    id: 'add0011',
                    add_name:'Huevo',
                    image_add: "https://i.ibb.co/pL14tvV/queso.jpg",
                    price_add:15,  
                    quantity_add: 0,                      
                 }, 
                   {
                    id: 'add0002',
                    add_name:'Agua ',
                    image_add: "https://i.ibb.co/Qd4fZJZ/agua-refresco.jpg",
                    price_add:10,  
                    quantity_add: 0,                      
                    }, 
                    {
                        id: 'add0002',
                        add_name:'Refresco',
                        image_add: "https://i.ibb.co/Qd4fZJZ/agua-refresco.jpg",
                        price_add:15,  
                        quantity_add: 0,                      
                        }, 
                  {
                    id: 'add0003',  
                    add_name:'Papas',
                    image_add: "https://i.ibb.co/HX0VyVW/aros.jpg",                    
                    price_add:15,  
                    quantity_add: 0,                      
                  },  
                 
                 
             ]
            
        });
    }   

   /*funcion para modificar/actualizar cantidad en los platillos mediante evento onChange, pasando como propiedad en la funcion modifyQuantity*/
   sendQuantityTicked(indexFood, quantityFood){ /*recibe dos parametros: indice de la orden y la cantidad de alimentos*/
        this.breakfasts.forEach((element, id) => {
            if(indexFood === id){
                this.breakfasts[id].quantity = quantityFood;  
            }
        }); /*funcion para cada uno de los elementos, verifica si el indice que recibe corresponde al indice del arreglo */
   } 

   sendTicked(indexcheck,eventCheckFood){ /*recibe dos parametros: indice de la orden y la cantidad de alimentos*/
    this.hamburger.forEach((element, id) => {
        if(indexcheck === id){
            this.hamburger[id].check_hamb_simple= eventCheckFood;  
        }
    }); /*funcion para cada uno de los elementos, verifica si el indice que recibe corresponde al indice del arreglo */
}  
    sendRadioTicked(indexFood,eventRadioFood){
    this.hamburger.forEach((element,id)=>{
        if(indexFood===id && (eventRadioFood === "Pollo" || eventRadioFood === "Res" || eventRadioFood === "Vegetariana" )){
            this.hamburger[id].ingredient = eventRadioFood
        }
    });

    }

    sendSupplement(indexFood,eventSuppValue,eventSuppCheck){
        
        this.hamburger.forEach((element,id)=>{
            if(indexFood === id && (eventSuppCheck===true) && (eventSuppValue ==="ketchup" )){
                this.hamburger[id].suppl_one.supp_ingred = eventSuppValue;               
            }    
            else if(indexFood === id && (eventSuppValue ==="aros de cebolla"))   {
                this.hamburger[id].suppl_two.supp_ingred_two= eventSuppValue; 
                 
            }
            else if(indexFood === id && (eventSuppValue ==="jitomate"))   {
                this.hamburger[id].suppl_three.supp_ingred_three= eventSuppValue;  
            }
            else if(indexFood === id && (eventSuppValue ==="lechuga"))   {
                this.hamburger[id].suppl_for.supp_ingred_for= eventSuppValue;  
            }
            else if(indexFood === id && (eventSuppValue ==="mostaza"))   {
                this.hamburger[id].suppl_five.supp_ingred_five= eventSuppValue;  
            }
            else if(indexFood === id && (eventSuppValue ==="pepinillos"))   {
                this.hamburger[id].suppl_six.supp_ingred_six= eventSuppValue;  
            }
                        
             
        });

              

    }   

    sendCheckBebidas(indexFood, quantityFood){ /*recibe dos parametros: indice de la orden y la cantidad de alimentos*/
        this.drinks_additional.forEach((element, id) => {
            if(indexFood === id){
                this.drinks_additional[id].quantity_add = quantityFood;  
            }
        }); /*funcion para cada uno de los elementos, verifica si el indice que recibe corresponde al indice del arreglo */
   } 

   sendRadio(indexAddOne, eventRadioAddOne){
    this.drinks_additional.forEach((element,id)=>{
        if(indexAddOne===id && (eventRadioAddOne === "Queso"   ||  eventRadioAddOne=== "Huevo" ||  eventRadioAddOne=== "Agua" ||  eventRadioAddOne=== "Refresco" ||  eventRadioAddOne=== "Papas" ||  eventRadioAddOne=== "Onions")){
            this.drinks_additional[id].add_name = eventRadioAddOne
        }        
    });

    }

   
   
}

var VarDesayunoController = new DesayunoController;

export default VarDesayunoController;

