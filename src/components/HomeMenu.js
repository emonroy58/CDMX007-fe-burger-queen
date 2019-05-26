import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import SignIn from './SignIn';
import '../styles/Menu.css';




class Menu extends Component{
 
    
    render(){
        return(
                 
         <div className= "Menu">  

            <div>
                <img  className="container" src="https://i.ibb.co/MBz9DhF/portada-Queen.png" alt="Home"/>          
                    {/*<botton className="BtnMenu"><Link to='/Desayuno'>Ver Menu</Link> </botton>*/}
            </div> 

            <div>
                <SignIn />
            </div>    
                           

         </div>  
              
           
          
        )
    }

}

export default Menu;