import React from 'react';

class Formulario extends React.Component {
    render() {
        
    //     const AgregarContanto = ()=>{
    //     let nombre = document.getElementById('input_nombre').value;
    //      let apellido = document.getElementById('input_apellido').value;
    //      let correo = document.getElementById('input_correo').value;
    //      let telefono = document.getElementById('input_correo').value;
    //      let contactos=  [nombre,apellido,correo,telefono]
    //     let resultado= alert(contactos)
    //    return resultado;
        
    //      }
    //   document.getElementById('btn-enviar').addEventListener('click', AgregarContanto);

        


        return (
            <div className="Formulario">
                <form>
                    {/* Nombre */}
                    <div className="">
                        <label for="Nombre" className="formulario__label"><b>Nombre</b></label>
                        <div class="formulario__grupo-input">
                            <input id="input_nombre" type="text" className="formulario__input " placeholder="Nombre">
                            </input>
                        </div>
                    </div>
                    {/* Apellido */}
                    <div className="">
                        <label for="Apellido" className="formulario__label"><b>Apellido</b></label>
                        <div class="formulario__grupo-input">
                            <input id="input_apellido" type="text" className="formulario__input " placeholder="Apellido">
                            </input>
                        </div>
                    </div>
                    {/* Correo */}
                    <div className="">
                        <label for="Nombre" className="formulario__label"><b>Correo</b></label>
                        <div class="formulario__grupo-input">
                            <input id="input_correo" type="text" className="formulario__input " placeholder="you@email.com">
                            </input>
                        </div>
                    </div>
                    {/* Telefono */}
                    <div className="">
                        <label for="Nombre" className="formulario__label"><b>Telefono</b></label>
                        <div class="formulario__grupo-input">
                            <input id="input_telefono" type="text" className="formulario__input " placeholder="000-000-0000">
                            </input>
                        </div>
                    </div>

                    <button id="btn-enviar" className="btn_enviar ">Enviar</button>
                </form>
            </div>

        );

       
    }



}






export default Formulario;