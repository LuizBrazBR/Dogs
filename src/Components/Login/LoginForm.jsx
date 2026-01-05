import React from "react";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";

import { TOKEN_POST } from "../../api";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { endpoint, options } = TOKEN_POST({
    username: username.value,
    password: password.value,
  });

  async function handleForm(e) {
    e.preventDefault();

    const isUserValid = username.validate();
    const isPassValid = password.validate();

    if (isUserValid && isPassValid) {
      const getToken = await fetch(endpoint, options);
      const response = await getToken.json();
      window.localStorage.setItem("token", response.token);
      console.log(response);
      return response;
    }
  }

  return (
    <section>
      <form onSubmit={handleForm}>
        <Input label="Usuário" id="username" {...username} />
        <Input label="Senha" id="password" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
