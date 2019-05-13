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
                }
            ],
            hamburger_simple:[
                {id: 'alm0001',
                ingredient:{
                    simple:['pollo', 'res','vegetariana'],
                        add_ingredient:{
                        option_add_ingredient:['queso','huevo'],
                        price_add_ingredient:15,
                   },
                price: 40,
                },    
                 
                 supplements:['mayonesa', 'mostaza', 'jitomate', 'pepinillo','cebolla','picante','catsup','lechuga'],
                 drink:{
                     op_drink:['agua, refresco',],
                     price_drink: [10,15],
                 },

                 add_food:{
                   add_food_company:['papas a la francesa','Onion Rings'],
                   add_food_price:15,
                 },
                },
                
            ],
            hamburger_double:[
                {id: 'alm0001'},
                
            ],
            
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
   
}

var VarDesayunoController = new DesayunoController;

export default VarDesayunoController;

