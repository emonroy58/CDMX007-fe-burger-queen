import React, {Component} from 'react';
import Bienvenida from './Bienvenida';
import VarDesayunoController from '../components/DesayunoController';
import db from './../FirestoreConfig';
import {Table, Button, Row, Col, InputGroup, Input} from 'reactstrap';


export default class Todos extends Component{
state={
    items:[],
    inputValue :'',
}

    componentDidMount(){
        db.collection('foods').onSnapshot((snapShots)=>{
                this.setState({
                    items: snapShots.docs.map(doc=>{
                        //console.log(doc.data());
                       return{
                            id: doc.id,
                            data: doc.data()
                        }
                        
                    })
                })
          }) 
            
    }


   /* changeValue = (elemnt)=>{
        this.setState({
            inputValue: elemnt.target.value
        })
    }*/


   /* action= ()=>{
        const {inputValue}= this.state;
        db.collection('foods').add({
            name:inputValue
        }).then( ()=>{
            console.log('Agregado');
            
        }).catch( ()=>{
            console.log('error');
            
        })
    }*/

    render(){

       
        const {items, inputValue}= this.state;

        return(
            <Bienvenida>
            <div>
           
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items !== undefined ?items.map((item, key) =>(
                            <tr key={key}>
                                <td>{item.data.name}<br></br>
                                    Cantidad: {item.data.quantity}<br></br>
                                    Precio: $   {item.data.price}.00
                                    </td>
                                <td><Button color="warning">Editar</Button></td>    
                                <td><Button color="danger">Eliminar</Button></td> 
                            </tr>

                        )):null}

                    </tbody>
                </Table>
            </div>
            </Bienvenida>  
        )
    }  
  
}