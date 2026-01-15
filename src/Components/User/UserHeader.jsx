import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserHeader.module.css";
import Feed from "../../Assets/feed.svg?react";
import Stats from "../../Assets/estatisticas.svg?react";
import Post from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import { UserContext } from "../../UserContext";

const UserHeader = () => {
  const [mobile] = useState(false);

  const { logout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/conta"
        end
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <Feed />
        {mobile && "Feed"}
      </NavLink>
      <NavLink
        to="/conta/stats"
        end
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <Stats />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink
        to="/conta/postar"
        end
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <Post />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={logout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeader;
