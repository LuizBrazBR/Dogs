import React, { useContext } from "react";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../Error";

const LoginCriar = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm("email");
  const { request, error, loading } = useFetch();

  const { Login } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const { endpoint, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });

    const { response } = await request(endpoint, options);
    if (response.ok) {
      await Login(username.value, password.value);
    }
  }

  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" {...username} />
        <Input label="Email" type="email" {...email} />
        <Input label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error>{error}</Error>}
      </form>
    </div>
  );
};

export default LoginCriar;
