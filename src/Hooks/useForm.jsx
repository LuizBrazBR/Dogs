import React, { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [erro, setErro] = useState(null);

  function validate(value) {
    if (value.length === 0) {
      setErro("Preencha o campo");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
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
