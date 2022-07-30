import React, { useEffect, useState } from 'react'
import { EditarPeli } from './EditarPeli';


export function Listado({listadoState, setListadoState}) {

    //const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);


    useEffect(() => {
        console.log("Componentes del listado de peliculas cargado");
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;

        
    };

    const borrarPeli = (id) => {

       // Conseguir las peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();


       // Filtrar las peliculas para que se elimine del array la que no quiero
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        //console.log(pelis_almacenadas, nuevo_array_pelis);

       // Actualizar estado del listado
       setListadoState(nuevo_array_pelis);


       // Actualizar los datos en el localStorage
       localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));

    }




    return (
        <>
            {listadoState != null ?
             listadoState.map(peli => {
                return (
                    
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>

                        <button className="edit" onClick={ () => setEditar(peli.id)}> Editar</button>

                        <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

                        {/*Aparece formulario de editar*/}
                        {editar === peli.id &&(
                            <EditarPeli peli={peli}
                                         conseguirPeliculas = {conseguirPeliculas}
                                         setEditar = {setEditar}
                                         setListadoState = {setListadoState}
                            />// Enviamos funciones como prop
                                         
                        )}

                    </article>
                )
            })
          :<h2> No hay peliculas para mostrar </h2>
        }
        </>
    );
}
