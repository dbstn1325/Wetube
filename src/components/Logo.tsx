import React from "react";
import { LogoImg } from "./LogoImg";
import logo from "../assets/img/youtube_logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <LogoImg src={logo} alt="youtube" />
    </Link>
  );
}

export default Logo;
