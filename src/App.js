import React from 'react';
import './App.css';
import contactos from './contactos.json'
//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//font awesome
//import {FontAwesomenIcon} from '@fortawesome/react-fontawesome';


//Importar componentes
//import AddCliente from './Componentes/AddCliente'
import Formulario from './Componentes/Formulario'


console.log(contactos);
class App extends React.Component {
   
    state={
        contactos: contactos
    }

    AddContacto= (nombre,apellido,telefono,correo)=>{
        const nuevoContacto ={
            nombre: nombre,
            apellido: apellido,
            telefono:telefono,
            correo: correo,
            id: this.state.contactos.length
        }
        this.setState({
            contactos: [...this.state.contactos, nuevoContacto]
        })
    }



render() {
  
  return (
      <div>
      this
   
      <Formulario addContactos={this.addContacto} contactos={this.state.contactos} />
      </div>
 




  )
}

}



export default App;
