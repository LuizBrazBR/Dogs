import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserHeader.module.css";
import Feed from "../../Assets/feed.svg?react";
import Stats from "../../Assets/estatisticas.svg?react";
import Post from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import { UserContext } from "../../UserContext";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const UserHeader = () => {
  const mobile = useMediaQuery({ query: "(max-width: 50rem)" });
  const [mobileActive, setMobileActive] = useState(false);

  const { logout } = useContext(UserContext);

  function mobileMenu() {
    setMobileActive(!mobileActive);
  }

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${mobileActive && styles.mobileButtonActive}`}
          onClick={mobileMenu}
        ></button>
      )}

      <nav
        className={
          mobile
            ? `${styles.mobile} ${mobileActive && styles.mobileActive}`
            : styles.nav
        }
      >
        <NavLink
          to="/conta"
          end
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={() => setMobileActive(false)}
        >
          <Feed />
          {mobile && "Feed"}
        </NavLink>
        <NavLink
          to="/conta/stats"
          end
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={() => setMobileActive(false)}
        >
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink
          to="/conta/postar"
          end
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={() => setMobileActive(false)}
        >
          <Post />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={logout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeader;
