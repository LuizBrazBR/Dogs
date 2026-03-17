import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import Error from "../Error";
import { PASSWORD_LOST_POST } from "../../api";

const LoginPerdeuSenha = () => {
  const login = useForm();
  const { request, error, loading } = useFetch();
  const [ok, setOk] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    const url = window.location.href;
    const { endpoint, options } = PASSWORD_LOST_POST({
      login: login.value,
      url,
    });
    const { response } = await request(endpoint, options);
    console.log(response);
    if (response.ok) {
      setOk(true);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {ok ? (
        <p style={{ color: "green" }}>E-mail enviado.</p>
      ) : (
        <form onSubmit={handleClick}>
          <Input label="Email / Usuário" {...login} />
          {error && <Error>{error}</Error>}
          {loading ? (
            <Button disabled>Enviando e-mail</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}
    </section>
  );
};

export default LoginPerdeuSenha;
