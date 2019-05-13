import React from 'react';
import { Component } from 'react';
import Desayuno from '../components/Desayuno.js';
import Ticket from '../components/Ticket.js'
import '../styles/Bienvenida.css';


class Bienvenida extends Component{
    render(){
        return(
                 
         <div className= "Menu-Ticket">
          <header className="header">
            <div className="container">
                <div className="header-container">
                    <p className="logo">Burguer Queen</p>
                </div>
            </div>

          </header> 

          <section className="banner">
            <div className="banner-description"> 
                <div className="container">
                    <h1>DESAYUNOS Y ALMUERZOS DELICIOSOS</h1>
                 </div>
            </div>

          </section> 


           <div className="container">
           
            </div>
                <article className= "grid">
                    <Desayuno/>
                    <Ticket/>
                </article>  


            <section>
               <div className="section-inicio">
                   <div className="container">
                       <image className="Image-Inicio" src="https://i.ibb.co/TtY3hmW/inicio.jpg"/>
                   </div>
               </div>
           </section>

           </div>  
              
           
          
        )
    }

}

export default Bienvenida;