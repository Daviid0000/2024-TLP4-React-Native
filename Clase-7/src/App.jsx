// Importo el hook useState.
import { useState } from "react";



const App = () => {
  
  // Creo un estado para la variable 'personaje'.
  const [personaje, setPersonaje] = useState([])

  // Creo una función que solicitará los datos de la API mediante fetch.
  const peticion =  async() => {
      await fetch("https://swapi.dev/api/people")

  // Manejo la respuesta que brinda la API,
        .then((response) => response.json())
        .then((data) => {
          console.log("datos: ", data) 
          setPersonaje(data)})
  };

   // Creo una función para eliminar un usuario desde el indice en el que esté ubicado.
  const eliminarPersonaje = (i) => {

  // Almaceno los valores que se encuentran en 'personaje.results' en un nuevo array.
    const nuevosPersonajes = [...personaje.results];

  // Utilizo el método splice para eliminar un elemento del array indicando el indice del elemento y la cantidad de elementos que se eliminaran en el indice.
    nuevosPersonajes.splice(i, 1)

  // Actualizo el valor de la variable 'personaje' pasandole los datos que me proporciona el array con los personajes eliminados.
    setPersonaje({...personaje, results: nuevosPersonajes})
  }

  
  // Devuelvo los elementos JSX que cree en este componente
  return(

    <>
    
    <h1>Lista de personajes de Star Wars</h1>
    <hr />

    <ul>
    {/* Evalúo si la variable personaje tiene los datos que voy a estar obteniendo con el método map. */}
      {personaje && personaje.results && personaje.results.map((item, i) => (
    
    // Proporciono un identificador único a cada elemento que mostraré en la etiqueta 'li'
        <li key={i}>
        {item.name}

        <button onClick={eliminarPersonaje}>Eliminar</button>
      </li>))}
    </ul>

        <button onClick={peticion}>Obtener</button>


    </>

  )
}

//Exporto el componente
export default App;