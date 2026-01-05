import React from "react";
import URL from "../../utils/url";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";

//  endpoint: '/jwt-auth/v1/token',

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  async function handleForm(e) {
    e.preventDefault();

    const isUserValid = username.validate();
    const isPassValid = password.validate();

    if (isUserValid && isPassValid) {
      const endpoint = "/jwt-auth/v1/token";

      const getToken = await fetch(URL + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      });
      const response = await getToken.json();
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
