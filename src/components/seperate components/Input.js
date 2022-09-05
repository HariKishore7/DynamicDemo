import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Input = ({ id, label, type, options, validations, error }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-2">
      <label htmlFor={id} className="form-label">
        {label}:{" "}
      </label>
      <input
        className="form-control"
        onChange={(event) => handleChange(id, event, validations)}
        type={type}
        name={id}
        id={id}
      ></input>
      <span>{error && error}</span>
    </div>
  );
};
export default Input;
