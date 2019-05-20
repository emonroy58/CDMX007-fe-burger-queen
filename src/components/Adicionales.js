import React, { Component } from 'react';


class Additional extends Component{
        
constructor(props){
    super(props)
    this.state = {
        add_queso:"Queso", /*radio */  
        add_queso: "Agua",
        add_queso:"Papas"  
        
    }
  this.AdditionalFood = this.AdditionalFood.bind(this)  
}

AdditionalFood(event){
    console.log(event.target.value);
    this.setState({
        [event.target.name]: event.target.value
      
    })
    this.props.sendRadio(this.props.index, event.target.value);  

}
    
render (){

    return(
        <div>
           
            <div>
                <image className="ImageBreakfast" src={this.props.image_Add} />
                <input onChange={this.AdditionalFood} checked={this.props.add_name}  type="radio"  name="add_queso" value= "Queso" /> 
                <input onChange={this.AdditionalFood} checked={this.props.add_name }  type="radio"  name="add_queso" value= "Huevo" /> 
             
            </div>    
           {/*  <div>
                <image className="ImageBreakfast" src="https://i.ibb.co/7vw3Drz/agua.jpg"/>
                <input onChange={this.OpRadioAgua} checked={this.state.add_agua}  type="radio"  name="ingredient" value= "Agua" />
                <input onChange={this.OpRadioAgua} checked={this.state.add_agua}  type="radio"  name="ingredient" value= "Refresco" />
             
            </div>   
           <div>zws
                <image className="ImageBreakfast" src="https://i.ibb.co/yq3ry7G/papas.jpg"/>
                <input onChange={this.OpRadioOnChange} checked={this.state.ingredient === "Papas"}  type="radio"  name="ingredient" value= "Papas" /> Papas
                <input onChange={this.OpRadioOnChange} checked={this.state.ingredient === "Onions"}  type="radio"  name="ingredient" value= "Onions" /> Onions
             
            </div>  */}
            
        </div>
    )


}


}


export default Additional;