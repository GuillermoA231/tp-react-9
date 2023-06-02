import React from "react";
import { Card, Button, Row } from "react-bootstrap";

function CardCitas({ cita, handleBorrarCita }) {
  return (
    <div>
      <Card className="mb-4">
        <Card.Body className="p-3">
          <Card.Title>Mascota: {cita.nombreMascota}</Card.Title>
          <Card.Subtitle className="mb-2">
            <span className="h5">Dueño: {cita.nombreDuenio}</span>
          </Card.Subtitle>
        </Card.Body>
        <Card.Text className="bg-primary-subtle container py-4">
          <div className="d-flex align-items-center">
            <strong className="me-2">Fecha: </strong>
            <div className="bg-white flex-grow-1">{cita.fecha}</div>
          </div>
          <div className="d-flex align-items-center">
            <strong className="me-2">Hora: </strong>
            <div className="bg-white flex-grow-1">{cita.hora}</div>
          </div>
          <div className="d-flex align-items-center">
            <strong className="me-2">Síntomas: </strong>
            <div className="bg-white flex-grow-1">{cita.sintomas}</div>
          </div>
        </Card.Text>
        <Card.Body className="d-flex justify-content-end">
          <Button variant="danger" onClick={() => handleBorrarCita(index)}>
            Borrar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCitas;
