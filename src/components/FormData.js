import React from "react";
import Input from "./seperate components/Input";
import Select from "./seperate components/Select";
import Radio from "./seperate components/Radio";
import TextArea from "./seperate components/TextArea";

const FormData = ({
  field: { id, label, type, options, validations, value, error },
}) => {
  switch (type) {
    case "text":
      return (
        <Input
          id={id}
          label={label}
          type={type}
          validations={validations}
          error={error}
        />
      );
    case "radio":
      return (
        <Radio
          id={id}
          label={label}
          type={type}
          options={options}
          validations={validations}
          error={error}
        />
      );
    case "select":
      return (
        <Select
          id={id}
          label={label}
          type={type}
          options={options}
          validations={validations}
          error={error}
        />
      );
    case "textArea":
      return (
        <TextArea
          id={id}
          label={label}
          type={type}
          validations={validations}
          error={error}
        />
      );
    case "number":
      return (
        <Input
          id={id}
          label={label}
          type={type}
          validations={validations}
          error={error}
        />
      );
    default:
      return null;
  }
};

export default FormData;
