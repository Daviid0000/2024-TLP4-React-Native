import { useEffect, useState } from "react";
import miContexto from "./miContexto";
import OtroComponente from "./otroComponente.jsx";

const App = () => {
  const API = 'https://jsonplaceholder.typicode.com/users';
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => setUserData(data))
    };

    fetchData();
  }, []); 

  return (
    <miContexto.Provider value={{ userData }}>
      <OtroComponente />
    </miContexto.Provider>
  );
};

export default App;
