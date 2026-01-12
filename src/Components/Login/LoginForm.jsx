import React, { useContext } from "react";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../Form/Button.module.css";
import { Link } from "react-router-dom";
import Error from "../Error";

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
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form onSubmit={handleForm} className={styles.form}>
        <Input label="Usuário" id="username" {...username} />
        <Input label="Senha" id="password" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
