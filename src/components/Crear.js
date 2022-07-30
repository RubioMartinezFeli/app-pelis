import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorge';

export const Crear = ({setListadoState}) => {

    const tituloComponente ="Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    }); 

    //Desetructuración; accede mas facilmente al estado sin usar "state.atributo"
    //directamente atributo

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();// prevenimos acción por defecto del evento onSubmit

        //Conseguir datos del form
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la pelicula a guardar info del form
        const peli = {
            id: new Date().getTime(),//con este objeto date conseguimos un id unico para cada peli
            titulo,
            descripcion
        };

        // Guardar estado
        setPeliState(peli);

        // Actualizar el estado del listado mediante una función de call back
        setListadoState(elementos =>{
            /* Forma mas rapida de añadir un elemento nuevo
               a un array existente dentro de un estado*/
           return  [...elementos, peli];
        });

         // Guardar en el almacenamiento local un array de pelis
        // usamos el metodo JSON.stringify() para hacer del objeto
        // un String, ya que el localStorage no procesa objetos
        // el metodo es un helper

        GuardarEnStorage("pelis", peli);



    }

   

  return (
    <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                {/*Condición para imprimir peliState.titulo
                   Tenemos los atributos titulo && descripcion 
                   desestructurados para accede mas facilmente*/}

                <strong>{(titulo && descripcion) && "Has creado la pelicula: " + titulo}</strong>

                <form onSubmit={conseguirDatosForm}>
                    <input  type="text"
                            id='titulo'
                            name='titulo'
                            placeholder="Titulo"/>

                    <textarea 
                            id='descripcion'
                            name='descripcion'
                            placeholder="Descripción"></textarea>

                    <input  type="submit"
                            id='save'
                            value="Guardar"/>
                </form>
            </div>
  )
}
