import { useContext } from "react";
import miContexto from "./miContexto.jsx";

const OtroComponente = () => {
  const { userData } = useContext(miContexto);

  return (
    <>
      {userData && userData.map((user) => (
        <div key={user.id}>
          <p>Nombre: {user.name}</p>
          <p>Correo electrónico: {user.email}</p>
        </div>
      ))}
    </>
  );
};

export default OtroComponente;
