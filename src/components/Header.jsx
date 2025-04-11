import React from "react";
import { Link, NavLink } from "react-router";
import { IoMdHome } from "react-icons/io";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <header>
      <nav>
        <Link to="/">
          <IoMdHome className="home-icon" />
        </Link>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
