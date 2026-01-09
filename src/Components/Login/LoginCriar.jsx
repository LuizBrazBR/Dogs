import React, { useContext } from "react";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";

const LoginCriar = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm("email");

  const { Login } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { endpoint, options } = USER_POST({
        username: username.value,
        password: password.value,
        email: email.value,
      });
      const json = await fetch(endpoint, options);
      if (!json.ok) throw new Error("Usuário já cadastrado!");
      Login(username.value, password.value);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" {...username} />
        <Input label="Email" type="email" {...email} />
        <Input label="Senha" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </div>
  );
};

export default LoginCriar;
