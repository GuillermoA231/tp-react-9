import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Button, Form } from "react-bootstrap";
import ListCitas from "./ListCitas";

function Formulario() {
  const citasLocalStorage = JSON.parse(localStorage.getItem("citas")) || [];
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [validated, setValidated] = useState(false);
  const [cita, setCita] = useState("");
  const [citas, setCitas] = useState(citasLocalStorage);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity()) {
      Swal.fire({
        icon: "success",
        iconColor: "#198754",
        title: "Éxito!",
        text: "DATOS ENVIADOS CORRECTAMENTE.",
        background: "#fff",
        color: "#198754",
        showConfirmButton: false,
        timer: 1500,
      });
      const nuevaCita = {
        nombreMascota,
        nombreDuenio,
        fecha,
        hora,
        sintomas,
      };
      setCitas([...citas, nuevaCita]); // Actualizamos el estado de las citas
      limpiarFormulario();
      setValidated(false);
    } else {
      Swal.fire({
        icon: "error",
        iconColor: "#f51707",
        title: "ERROR",
        text: "DEBE DE COMPLETAR TODOS LOS CAMPOS",
        background: "#fff",
        color: "#f51707",
        confirmButtonColor: "#198754",
      });
      setValidated(true);
    }
  };

  const handleChange = (e) => {
    setCita(e.target.value);
  };

  const limpiarFormulario = () => {
    setNombreMascota("");
    setNombreDuenio("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center text-center"
      >
        <Form.Group controlId="inputNombreMascota">
          <Form.Label className="react-label">Nombre de la mascota:</Form.Label>
          <Form.Control
            required
            className="react-input"
            type="text"
            placeholder="Nombre de la mascota"
            name="nombreMascota"
            value={nombreMascota}
            onChange={(e) => {
              setNombreMascota(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa el nombre de la mascota.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="inputNombreDueno">
          <Form.Label className="react-label">Nombre del dueño:</Form.Label>
          <Form.Control
            required
            className="react-input"
            type="text"
            placeholder="Nombre del dueño"
            name="nombreDuenio"
            value={nombreDuenio}
            onChange={(e) => {
              setNombreDuenio(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa el nombre del dueño.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="inputFecha">
          <Form.Label className="react-label">Fecha:</Form.Label>
          <Form.Control
            required
            className="react-input"
            type="date"
            placeholder="Fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa una fecha válida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="inputHora">
          <Form.Label className="react-label">Hora:</Form.Label>
          <Form.Control
            required
            className="react-input"
            type="time"
            placeholder="Hora"
            name="hora"
            value={hora}
            onChange={(e) => {
              setHora(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa una hora válida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="inputSintomas">
          <Form.Label className="react-label">Síntomas:</Form.Label>
          <Form.Control
            required
            className="react-input"
            as="textarea"
            placeholder="Síntomas"
            name="sintomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa los síntomas.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Enviar formulario</Button>
      </Form>
      <ListCitas citas={citas} setCitas={setCitas} />
    </div>
  );
}

export default Formulario;
