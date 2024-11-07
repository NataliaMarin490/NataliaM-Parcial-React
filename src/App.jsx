import "./App.css";
import Form from "./components/Form";

function App() {

  return (
    <>
      <div className="App">
        <h1>Formulario para renta de cabaña</h1>
        <p>
          Por favor ingresa toda la información solicitada, al finalizar
          presiona <span>Enviar</span> para validar la información.{" "}
        </p>
        <Form />
      </div>
    </>
  );
}

export default App;
