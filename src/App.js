import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

    const [listadoState, setListadoState] = useState([]);

  return (
    // Como vamos a centrar el estilo en grid layout la etiqueta padre 
    // sera un div con la clase latyout

    <div className="layout">

        {/* Cabezera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/* Barra de navegación */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/* Contenido principal */}
        <section className="content">
            {/* Aqui van las peliculas y enviamos estado en forma de prop */}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>

        </section>

        {/* Barra lateral */}
        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            <Crear setListadoState={setListadoState}/>
        </aside>

        {/* Pie de página */}
        <footer className="footer">
            &copy; Master en React - <a href="www.google.com">Web google</a>
        </footer>



    </div>
  );
}

export default App;
