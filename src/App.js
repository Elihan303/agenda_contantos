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

    addContacto= (nombre,apellido,telefono,correo)=>{
        const nuevoContacto ={
            id: this.state.contactos.length,
            nombre: nombre,
            apellido: apellido,
            telefono:telefono,
            correo: correo
            
        }
        this.setState({
            contactos: [...this.state.contactos, nuevoContacto]
        })
    }
    deleteContacto= (id) =>{
        const newContacto=this.state.contactos.filter(contacto=> contacto.id !==id)
        this.setState({
            contactos: newContacto
        })

    }
    updateContacto= () =>{}





render() {
  
  return (
      <div>
   
      <Formulario deleteContacto={this.deleteContacto} addContacto={this.addContacto} contactos={this.state.contactos} key = {contactos.id} />
      </div>
 




  )
}

}



export default App;
