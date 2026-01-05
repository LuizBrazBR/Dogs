import React, { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState("");
  const [erro, setErro] = useState(null);

  function validate(value) {
    if (value.length === 0) {
      setErro("Preencha o campo");
      return false;
    } else {
      setErro(null);
      return true;
    }
  }
  function onChange({ target }) {
    const newValue = target.value;

    setValue(newValue);

    if (erro) {
      validate(newValue);
    }
  }

  return {
    value,
    onChange,
    erro,
    validate: () => validate(value),

    onBlur: () => validate(value),
  };
};

export default useForm;
