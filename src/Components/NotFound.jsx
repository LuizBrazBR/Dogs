import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <section className="container">
      <Helmet>
        <title>404 - Dogs</title>
        <meta name="description" content="Erro - Página não encontrada" />
      </Helmet>
      <h1 className="title">Erro: 404</h1>
      <p>Página não encontrada.</p>
    </section>
  );
};

export default NotFound;
