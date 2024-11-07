const Input = ({ inputName, type, valueInfo, setter }) => {
  return (
    <div className="input-container">
      <span>{inputName}</span>
      <input
        type={type}
        name={inputName}
        value={valueInfo}
        placeholder="Ingresa un valor"
        onChange={(event) =>
          setter(event.target.value)
        }
      />
    </div>
  );
};

export default Input;
