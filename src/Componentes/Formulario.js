import React from 'react';
import email_validation from './partials/validation'
import setErrorFor from './partials/validation';
import MaskedInput from 'react-text-mask';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Formulario extends React.Component {


    state = {
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",

    }

    CaptureData = (e) => {
        let campo = e.target.name;
        let contenido_campo = e.target.value;

        console.log(e.target.name, e.target.value);

        if(e.target.name == 'correo'){
            if(!email_validation(contenido_campo)){
                setErrorFor(e.target, 'Correo Electronico no valido!')
            }
            else{
            }
        }else{
        }


        this.setState({
            [e.target.name]: e.target.value

        })
    }
    

    insertarDatos = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addContacto(this.state.nombre,this.setState.apellido,this.state.telefono,this.state.correo);
    }


  
    

    render() {

        return (
            <div className="App">

                <header className="border bg-light">
                    <nav className="navbar navbar-expand-lg navbar-light  justify-content-between container ">
                        <h2>
                            <a className="logo">  AgendaMax  </a>
                        </h2>

                        <div className="header__nav">

                            <nav>
                                <a className="header_nav_a" href="https://www.youtube.com/channel/UCj31CP1tmMZkf6jVgdfhIgQ">Youtube</a>
                                <a className="header_nav_a" href="https://twitter.com/Jcod37954758">Twitter</a>
                                <a className="header_nav_a" href="https://www.instagram.com/junior.eddn17/">Instagram</a>
                                <a className="header_nav_a" href="https://github.com/Elihan303/agenda_contantos.git">Github</a>
                            </nav>

                        </div>


                        <div className="form-inline my-2 my-lg-0 flex-column">
                            <input className="form-control mr-sm-2" type="search" id='buscarCliente' placeholder="pulsar enter para buscar" aria-label="Search">
                            </input>
                        </div>
                    </nav>
                </header>

                <div className="generic">

                    <div className="container clientesResultados">
                        <table className="table table-hover border " id='bodyDeTablaResult'>
                        </table>
                        <h2 id='searchResult'> </h2>
                    </div>
                    <form className=" mt-4">
                        <div className="container d-flex flex-wrap">
                            <div className="formulario col-12 col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Contactos</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Nombre</label>
                                            <input type="text"
                                                className="form-control"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="nombre"
                                                onChange={this.CaptureData}
                                                value= {this.contactos}
                                            >
                                            </input>
                                            <i className="fas fa-check-circle"></i>
                                            <i className="fas fa-exclamation-circle"></i>
                                            <small>Error Message</small>
                                        </div>
                                        <div className="form-group">
                                            <label>Apellido</label>
                                            <input type="text"
                                                className="form-control"
                                                id="apellido"
                                                name="apellido"
                                                placeholder="apellido"
                                                onChange={this.CaptureData}
                                            >

                                            </input>
                                            <i className="fas fa-check-circle"></i>
                                            <i className="fas fa-exclamation-circle"></i>
                                            <small>Error Message</small>
                                        </div>

                                        <div className="form-group">
                                            <label >Numero de telefono</label>
                                            <MaskedInput type="text" className="form-control" id="telefono" name="telefono"
                                            placeholder="telefono" onChange={this.CaptureData}
                                            mask = {['(',/[0-9]/,/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/]}
                                            guide={true} showMask={true}/>
                                          
                                            <i className="fas fa-check-circle"></i>
                                            <i className="fas fa-exclamation-circle"></i>
                                            <small>Error Message</small>
                                        </div>



                                        <div className="form-group">

                                            <label>E-mail</label>
                                            <input type="email"
                                                className="form-control"
                                                placeholder="example@email.com"
                                                id="email"
                                                name='correo'
                                                onChange={this.CaptureData}
                                            >
                                            </input>
                                            <input className="fas fa-check-circle"></input>
                                            <i className="fas fa-exclamation-circle"></i>

                                            <small>Error Message</small>
                                        </div>

                                    </div>
                                    <button type="click" className="btn btn-success" id='botonDeCrear' onClick={this.insertarDatos} > Agregar</button>
                                </div>
                            </div>
                            <div className="clientes col-12 col-md-8">
                                <table className="table table-hover border">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Apellido</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Correo</th>

                                            <th scope="col">Configuracion</th>
                                        </tr>
                                    </thead>
                                    <tbody id='bodyDeTabla' >
                                        {this.props.contactos.map((e) => 
                                        <tr key={e.id}>
                                            <th scope="row">{e.id}</th>
                                            <td>
                                                {e.nombre}
                                            </td>
                                            <td>
                                                {e.apellido}
                                            </td>
                                            <td>
                                                {e.telefono}
                                            </td>
                                            <td>
                                                {e.correo}
                                            </td>
                                            <td>
                                                <button className="btn btn-success">Editar</button>
                                                {"  "}
                                                <button className="btn btn-danger" onClick={this.props.deleteContacto.bind(this, e.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                        )
                                        }    

                                    </tbody>


                                </table>
                            </div>
                        </div>
                    </form>


                </div>
                <br />
                <div className="footer">
                    <p className="footer_p">Copyright © 2010-2021
                    TeamPicapollo
            Software</p>
                </div>

                {/* <AddCliente nombre={this.state.nombre} apellido={this.state.apellido} telefono={this.state.telefono} correo={this.state.correo}/> */}

            </div >

        )

    }


}
