import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';


class SignIn extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password:'', 
         }
    }
   

    handleChange= (element)=>{
        this.setState({
            [element.target.id]:element.target.value
        })      
        
    }

    handleSubmit = (element)=>{
        element.preventDefault();
        console.log(this.state);
    }
   
    
    render(){
        return(
               <div className="containner-form">

                    <Form onSubmit={this.handleSubmit} className="wrapper">

                    <h2>
                        <span className="font-weight-bold text-center title">Bienvenido</span>
                    </h2>

                    <FormGroup className="contac">
                    <Label for="exampleEmail">Email</Label>
                    <Input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="email" placeholder="Email" />

                    <Label for="examplePassword">Password</Label>
                    <Input onChange={this.handleChange} value={this.state.password} type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>   

                    <Button type="submit" onClick={this.login} className="btn-lg btn-ligth btn-block" color="warning"><Link to='/Desayuno'>Login</Link></Button>

                    </Form>

               </div>
               
                
        )
    }

}

export default SignIn;