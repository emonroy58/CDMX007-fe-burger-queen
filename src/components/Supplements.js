import React, { Component } from 'react';


class Supplements extends Component{
        
constructor(props){
    super(props)
    this.state = {
        supplement: false,
        supplement_one: false,
        supplement_two: false,
        supplement_three: false,
        supplement_for: false,
        supplement_five: false,
        supplement_six: false,
        supplement_seven: false,
        supplement_eigth: false,
        supplement_nine: false,       
    
    }
 this.supplementOnchange = this.supplementOnchange.bind(this)
   
}

supplementOnchange(event){
    console.log(event.target.checked);
    
    this.setState({
        [event.target.name]: event.target.checked       
      
    })
    this.props.sendCheckSupplement(this.props.index, event.target.value, event.target.checked);  
    
}/*fin modifyOnchange*/


    
render (){

    return(
        <div>
           
           <div className = "supplement"> 
                <input onChange={this.supplementOnchange} checked= {this.state.supplement} type="checkbox" value= "ketchup" className="ketchup" name="supplement" />
                <span>  1  </span>
                <input onChange={this.supplementOnchange} checked= {this.state.supplement_one} type="checkbox" value="aros de cebolla" className="onions" name="supplement_one" />
                <span>  2 </span>
                <input onChange={this.supplementOnchange} checked= {this.state.supplement_two} type="checkbox" value="jitomate" className="tomatoes" name="supplement_two" />
                <span>  3 </span>
                <input onChange={this.supplementOnchange} checked= {this.state.supplement_three} type="checkbox" value="lechuga" className="letuce" name="supplement_three" />
                <span>  4 </span>
                <input onChange={this.supplementOnchange} checked= {this.state.supplement_for} type="checkbox" value="mostaza" className="mustard" name="supplement_for" />
                <span> 5 </span>
                <input onChange={this.supplementOnchange} checked= {this.state.supplement_five} type="checkbox" value="pepinillos" className="pickles" name="supplement_five" />
                <span> 6 </span>
               {/* <input onChange={this.supplementOnchange} checked= {this.state.supplement_six} type="checkbox" value="mayonesa" className="mayonnaisi" name="supplement_six" />
                <span> 7 </span>
                <input onChange={this.supplementOnchange} checked= {this.state.supplement_seven} type="checkbox" value="tocino" className="bacon" name="supplement_seven" />
                <span> 8 </span>
                <input onChange={this.supplementOnchange} checked= {this.state.supplement_eigth} type="checkbox" value="champiñones" className="mushroom" name="supplement_eigth" />
                <span> 9 </span>
                <input onChange={this.supplementOnchange} checked= {this.state.supplement_nine} type="checkbox" value="bbq" className="bbq" name="supplement_nine" />
                <span> 10 </span> */} 
                
               {/* <label className="supplement-hamburguer" > Hamburguesa Simple {this.state.check_hamb_simple} </label>   */}   
             
            </div>  
            <div>
                
            </div>
            
        </div>
    )


}


}


export default Supplements;