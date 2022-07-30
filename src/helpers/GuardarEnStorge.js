export const GuardarEnStorage = (clave, elemento) => {

    // Conseguir los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);

    // Comprobar si es un array
    if(Array.isArray(elementos)){
        //Añadir dentro de un array el elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con el nuevo elemento
        elementos = [elemento];
    }

    // Guardar en el local storage
    localStorage.setItem(clave , JSON.stringify(elementos));
    

     // Devolver el objeto guardado
     return elemento;
}