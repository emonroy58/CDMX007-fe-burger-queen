import React, { Component } from 'react';

class Quantity extends Component {
    
modifyQuantity(event){
   this.props.sendOrder(this.props.index, event.target.value)
   
}


    render (){
        return(
            <div>
                <br/>
                <label>Cantidad: </label>
                {/*input contine un observador de eventos onchange, el cual cambiara cuando cantidad es >=1*/}
                <input onChange={this.modifyQuantity.bind(this)} type="number" min="0" max="20"/>
                <label className="SpaceBreakfast">Precio:{this.props.price} </label>
            </div>
        )
    }
}

export default Quantity;