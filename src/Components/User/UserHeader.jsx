import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserHeader.module.css";
import Feed from "../../Assets/feed.svg?react";

const UserHeader = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/conta"
        end
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Home
        <Feed />
      </NavLink>
      <NavLink
        to="/stats"
        end
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Home
        <Feed />
      </NavLink>
    </nav>
  );
};

export default UserHeader;
