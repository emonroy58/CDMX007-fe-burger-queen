import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'
import Ticket from './Ticket'
import './../styles/Bienvenida.css'


const Bienvenida = (props) => ( 
    
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
         
           <div>
           <Nav> 
                 <NavItem>
                     <NavLink ><Link to="/">Home</Link></NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink ><Link to="/Desayuno">Desayuno  </Link></NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink > <Link to="/Comida">Comida  </Link></NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink ><Link to="/Bebidas">Bebidas</Link></NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink ><Link to="/OrdersFirestore">Historial Comanda</Link></NavLink>
                 </NavItem>
                 
                 </Nav>                
                 
                 {props.children}
                 </div>
                     
                <div>
                <Ticket/>
                </div>
                 
                 
                 {/*<TicketFood/>*/}

                </article>  
                


            <section>
               <div className="section-inicio">
                   <div className="container">
                      {/*<image className="Image-Inicio" src="https://i.ibb.co/TtY3hmW/inicio.jpg"/> */} 
                   </div>
               </div>
           </section>

           </div>  
    
    
           
          
)

export default Bienvenida