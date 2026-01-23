import React, { useState } from "react";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import useForm from "../../Hooks/useForm";
import styles from "./UserPost.module.css";
import { PHOTO_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Error";
import { useNavigate } from "react-router-dom";

const UserPost = () => {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const { request, error } = useFetch();

  function onChange({ target }) {
    const img = target.files[0];
    const imageUrl = URL.createObjectURL(img);
    setPreview(imageUrl);
    setImage(img);
  }

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    const formData = new FormData();
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    formData.append("img", image);

    try {
      const { endpoint, options } = PHOTO_POST(formData, token);

      const { json, response } = await request(endpoint, options);

      if (!response.ok) throw new Error(json.message);

      navigate("/");
    } catch {
      console.log(error);
    }
  }

  return (
    <section className={`animeLeft ${styles.grid}`} onSubmit={handleSubmit}>
      <form action="">
        <Input label="Nome" id="nome" {...nome} />
        <Input label="Peso" id="peso" type="number" {...peso} />
        <Input label="Idade" id="idade" type="number" {...idade} />
        <input
          type="file"
          id="img"
          onChange={onChange}
          style={{ marginBlock: "1rem" }}
        />
        <Button>Enviar</Button>
        {error && <Error>{error}</Error>}
      </form>
      <div
        style={{ background: `url(${preview})` + " no-repeat center" }}
        className={styles.preview}
      ></div>
    </section>
  );
};

export default UserPost;
