import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Radio = ({ id, label, type, options, validations, error }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-2">
      <label htmlFor={label} className="form-label">
        {label}:{" "}
      </label>
      {options.map((opt) => {
        return (
          <div className="form-check form-check-inline mx-3 mt-2">
            <label htmlFor={id} className="form-check-label">
              {opt.label}{" "}
            </label>
            <input
              className="form-check-input"
              onChange={(event) => handleChange(id, event, validations)}
              type={type}
              name={id}
              id={id}
              value={opt.value}
            />
          </div>
        );
      })}
      <span>{error && error}</span>
    </div>
  );
};
export default Radio;
