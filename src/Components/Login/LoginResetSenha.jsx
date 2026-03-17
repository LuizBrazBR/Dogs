import React from "react";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";
import Error from "../Error";
import { useState } from "react";
import { PASSWORD_RESET_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const LoginResetSenha = () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("key");
  const login = params.get("login");
  const password = useForm("password");
  const confirmPassword = useForm("password");
  const [message, setMessage] = useState(null);
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
      setMessage("As senhas não conferem");
      return;
    } else {
      setMessage(null);
    }

    async function apiResetPassword() {
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

    apiResetPassword();
  }

  return (
    <section>
      <h1 className="title">Resete sua senha</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Digite sua nova senha: " {...password} />
        <Input label="Confirme sua nova senha: " {...confirmPassword} />
        <Error>{message}</Error>
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
