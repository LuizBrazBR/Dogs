import React from "react";
import UserHeader from "./UserHeader";
import styles from "./UserHeaderTitle.module.css";
import { useLocation } from "react-router-dom";

const UserHeaderTitle = () => {
  const { pathname } = useLocation();

  const routeTitles = {
    "/conta/stats": "Estatísticas",
    "/conta/postar": "Poste Sua Foto",
    "/conta": "Minha Conta",
  };

  const title = routeTitles[pathname];

  return (
    <div className={styles.container}>
      <h1 className="title">{title}</h1>
      <UserHeader />
    </div>
  );
};

export default UserHeaderTitle;
