import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../routes/components/NavItem";

const CustomHooks = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="custom counter" to="counter" color="black" />
          <NavItem label="custom user" to="user" color="black" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default CustomHooks;
