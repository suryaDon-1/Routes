import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#282c34",
    padding: "15px 30px",
    color: "white",
    fontFamily: "Arial",
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "bold",
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };
   const linkStyle2 = {
    textDecoration: "none",
    color: "yellow",
    textWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>MySite</div>

      <nav style={navStyle}>
        <Link to={"/"} style={linkStyle}>
          Home
        </Link>
        <Link to={"/Product"} style={linkStyle}>
          Product
        </Link>
        <Link to={"/Contact"} style={linkStyle}>
          Contact
        </Link>
        <Link to={"/Blog"} style={linkStyle}>
          Blog
        </Link>
        <Link to={"/Signup"} style={linkStyle2}>
          SignUp
        </Link>
        <Link to={"/Signin"} style={linkStyle2}>
          Signin
        </Link>
      </nav>
    </header>
  );
}

export default Header;
