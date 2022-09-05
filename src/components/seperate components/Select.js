import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Select = ({ id, label, type, options, validations, error }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="form-group">
      <label>{label}: </label>
      <select
        onChange={(event) => handleChange(id, event, validations)}
        className="form-control"
      >
        <option>Select</option>
        {options.map((opt, i) => {
          return (
            <option id={id} key={i} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
      <span>{error && error}</span>
    </div>
  );
};
export default Select;
