import React, { useContext } from "react";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  // const { endpoint, options } = TOKEN_POST({
  //   username: username.value,
  //   password: password.value,
  // });

  const { Login } = useContext(UserContext);

  function handleForm(e) {
    e.preventDefault();

    const isUserValid = username.validate();
    const isPassValid = password.validate();

    if (isUserValid && isPassValid) {
      Login(username.value, password.value);
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
