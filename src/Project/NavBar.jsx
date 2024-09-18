import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        background: "#089",
        color: "#fff",
        padding: "20px",
      }}
    >
      {" "}
      <NavLink
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to={"/product"}
      >
        My Products
      </NavLink>
      <NavLink
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to={"/product/create"}
      >
        Create Product
      </NavLink>
    </nav>
  );
};

export default NavBar;
