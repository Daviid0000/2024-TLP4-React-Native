import { useEffect, useState } from "react";



const App = () => {
  
  const [personaje, setPersonaje] = useState([])

  
  const handleClick =  async() => {
      await fetch("https://swapi.dev/api/people")
        .then((response) => response.json())
        .then((data) => {
          console.log("datos: ", data)
          setPersonaje(data)})
  };

   
  const eliminarPersonaje = (i) => {
    const nuevosPersonajes = [...personaje.results];
    nuevosPersonajes.splice(i, 1)
    setPersonaje({...personaje, results: nuevosPersonajes})
  }

  

  return(

    <>

    <ul>
      {personaje && personaje.results && personaje.results.map((item, i) => (
        <li key={item.name}>
        {item.name}
        <button onClick={() => {eliminarPersonaje(i)}}>Eliminar</button>
      </li>))}
    </ul>

        <button onClick={handleClick}>Obtener </button>


    </>

  )
}

export default App;