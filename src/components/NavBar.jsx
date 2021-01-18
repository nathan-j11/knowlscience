import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/admin/dashboard">
        Dashboard
      </NavLink>
      <NavLink exact to="/admin/course-form/create">
        Create course
      </NavLink>
    </nav>
  );
};

export default NavBar;