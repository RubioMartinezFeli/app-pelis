import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    // Actualizar estado con cada cambio (onChange)
    setBusqueda(e.target.value);
    
    // Conseguir listado completo de peliculas atraves de props de App.js 

    // Filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    // Si se escribe una o menos de una letra en el campo de busqueda o 
    // no se enuentra nada (pelis_encontradas <= 0)
    // se mostraran todas las pelis tal cual (no se verá ningún cambio)
    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }

    setListadoState(pelis_encontradas);



  }

  return (
    <>
    <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>
                {(noEncontrado == true && busqueda.length > 1)   && (
                   <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
                )}
                <form>
                    <input type="text"
                        id='search_field'
                        name='busqueda'
                        autoComplete='off'
                        value={busqueda}
                        onChange={e => buscarPeli(e)}
                      />
                    <button>Buscar</button>
                </form>
            </div>
    </>
  )
}
