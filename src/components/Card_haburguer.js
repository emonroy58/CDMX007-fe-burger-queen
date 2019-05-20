import React, { Component } from 'react';


class CardHambueguer extends Component{
        
constructor(props){
    super(props)
    this.state = {
        check_hamb_simple:false,
        ingredient : "Pollo",
        
    }
  this.modifyOnchange = this.modifyOnchange.bind(this)  
  this.OpRadioOnChange = this.OpRadioOnChange.bind(this)  
}

modifyOnchange(event){
    console.log(event.target.checked);
    
    this.setState({
        [event.target.name]: event.target.checked
      
    })
    this.props.sendCheck(this.props.index, event.target.checked);  
    
}/*fin modifyOnchange*/

OpRadioOnChange(event){
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
                <input onChange={this.modifyOnchange} checked= {this.state.check_hamb_simple} type="checkbox" name="check_hamb_simple" />
                <label className="PriceHamburguer-Simple" > Elegir Hamburguesa {this.state.check_hamb_simple} </label>      
                
            </div>
            <div>
            <input onChange={this.OpRadioOnChange} checked={this.state.ingredient === "Pollo"}  type="radio"  name="ingredient" value= "Pollo" /> Pollo
             <input onChange={this.OpRadioOnChange} checked={this.state.ingredient === "Res"}  type="radio"  name="ingredient" value= "Res" /> Res
             <input onChange={this.OpRadioOnChange} checked={this.state.ingredient === "Vegetariana"}  type="radio"  name="ingredient" value= "Vegetariana" /> Vegetariana
            </div>    
            
        </div>
    )


}


}


export default CardHambueguer;