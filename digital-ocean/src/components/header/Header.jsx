import React from "react";
import Button from "../button/Button";
import HeaderMenu from "../header-menu/HeaderMenu";
import Logo from "../logo/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="container">
      <Logo />
      <HeaderMenu />
      <div className="header-right">
        <Button type="text" value="Log in" />
        <Button type="primary " value="Sign up" />
      </div>
    </header>
  );
};

export default Header;
