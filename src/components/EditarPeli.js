import React from 'react'

export const EditarPeli = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar pelicula"

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        // Conseguir el target del evento
        let target = e.target;

        // Buscar el indice del objeto de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas();// Consegui peliculas del localStorage
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        // Crear objeto con ese indice
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        };

        // Actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada

        // Guardar el nuevo aray d onjetos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        // Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);// Cerramos el formulario


        
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text" 
                   name='titulo'
                   className='titulo_editado'
                   defaultValue= {peli.titulo}>
            </input>

            <textarea 
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada'/>
            
            <input type="submit" className='editar' value="Actualizar" />

        </form>
    </div>
  )
}