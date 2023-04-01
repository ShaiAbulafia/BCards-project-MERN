import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Outlet } from "react-router-dom";
import NavItem from "../../routes/components/NavItem";
const SandboxComponents = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="babel" to="babel" color="black" />
          <NavItem label="styles" to="comp-style" color="black" />
          <NavItem
            label="string interpolation"
            to="string-interpolation"
            color="black"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default SandboxComponents;
