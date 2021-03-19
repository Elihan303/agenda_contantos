import React from 'react';

class Formulario extends React.Component {
    render() {
        return (
            <div className="Formualrio">
                <form>
                    <div>
                        <label for="Nombre" class="formulario__label"><b>Nombre</b> </label>
                        <div class="formulario__grupo-input">
                            <input id="input_nombre" type="text" class="formulario__input " name="Nombre" placeholder="Nombre"
                                aria-label="First name">
                            </input>
                        </div>
                    </div>
                </form>
            </div>

        );
    }

}

export default Formulario;