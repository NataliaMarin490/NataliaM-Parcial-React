import { useState } from "react";
import Card from "./Card";
import Input from "./Input";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length >= 3 && lastName.length >= 6) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Ingresa tus datos</h3>
        <Input
          inputName="Nombre"
          type="text"
          valueInfo={name}
          setter={setName}
        />
        <Input
          inputName="Apellido"
          type="text"
          valueInfo={lastName}
          setter={setLastName}
        />
        <Input
          inputName="Numero"
          type="number"
          valueInfo={number}
          setter={setNumber}
        />
        <button type="submit">Enviar</button>
        {error && (
          <h4 style={{ color: "red" }}>
            Por favor chequea que la información sea correcta
          </h4>
        )}
      </form>{" "}
      {show && <Card name={name} lastName={lastName} number={number} />}
    </>
  );
};

export default Form;
