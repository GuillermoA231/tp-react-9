import { ListGroup } from "react-bootstrap";
import { useEffect } from "react";
import CardCitas from "./CardCitas";

const ListCitas = ({ citas, setCitas }) => {
  useEffect(() => {
    const citasJSON = localStorage.getItem("citas");
    if (citasJSON) {
      setCitas(JSON.parse(citasJSON));
    }
  }, []);

  const handleBorrarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
    localStorage.setItem("citas", JSON.stringify(nuevasCitas));
  };

  return (
    <>
      <ListGroup>
        {citas.map((cita, index) => (
          <CardCitas key={index} cita={cita} handleBorrarCita={handleBorrarCita} />
        ))}
      </ListGroup>
    </>
  );
};

export default ListCitas;
