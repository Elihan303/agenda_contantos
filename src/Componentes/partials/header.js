import 'react';

const header = () => (
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
                <input className="form-control mr-sm-2" type="search" id='buscarCliente' placeholder="pulsar enter para buscar" aria-label="Search"></input>
            </div>
        </nav>
    </header>
)


export default header;