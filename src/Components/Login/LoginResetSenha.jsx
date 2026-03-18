import React from "react";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";
import Error from "../Error";
import { useState } from "react";
import { PASSWORD_RESET_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const LoginResetSenha = () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("key");
  const login = params.get("login");
  const password = useForm("password");
  const confirmPassword = useForm("password");
  const [message, setMessage] = useState(null);
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
      setMessage("As senhas não conferem");
      return;
    }

    setMessage(null);

    const { endpoint, options } = PASSWORD_RESET_POST({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(endpoint, options);

    if (response.ok) {
      navigate("/login");
    }
  }

  return (
    <section>
      <Helmet>
        <title>Resetar senha - Dogs</title>
        <meta name="description" content="Página para resetar a senha" />
      </Helmet>
      <h1 className="title">Resete sua senha</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Digite sua nova senha: " {...password} />
        <Input label="Confirme sua nova senha: " {...confirmPassword} />
        {message && <Error>{message}</Error>}
        {loading ? (
          <Button disabled>Resetando senha...</Button>
        ) : (
          <Button>Resetar senha</Button>
        )}
        {error && <Error>{error}</Error>}
      </form>
    </section>
  );
};

export default LoginResetSenha;
