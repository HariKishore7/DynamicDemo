import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const TextArea = ({ id, label, type, options, validations, error }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mt-2 mb-2">
      <label className="form-label" htmlFor={id}>
        {label}:{" "}
      </label>
      <textarea
        className="form-control"
        onChange={(event) => handleChange(id, event, validations)}
        type={type}
        name={id}
        id={id}
      ></textarea>
      <span>{error && error}</span>
    </div>
  );
};
export default TextArea;
