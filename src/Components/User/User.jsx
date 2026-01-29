import React from "react";
import { UserContext } from "../../UserContext";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import UserHeaderTitle from "./UserHeaderTitle";
import UserStats from "./UserStats";
import UserPost from "./UserPost";
import UserFeed from "../../Feed/UserFeed";

const User = () => {
  return (
    <div className="container">
      <UserHeaderTitle />
      <Routes>
        <Route path="/" element={<UserFeed />} end />
        <Route path="stats" element={<UserStats />} />
        <Route path="postar" element={<UserPost />} />
      </Routes>
    </div>
  );
};

export default User;
