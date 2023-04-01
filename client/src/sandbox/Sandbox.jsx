import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";

import NavItem from "../routes/components/NavItem";
import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import DrawerListItem from "./DrawerListItem";
import { useUser } from "../users/providers/UserProvider";
import ROUTES from "../routes/routesModel";

const Sandbox = () => {
  const [isOpen, setOpen] = useState(false);
  const { user } = useUser();

  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;
  if (!user.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="top" open={isOpen} onClose={() => setOpen(false)}>
          <List>
            <DrawerListItem
              label="components"
              navigateTo="sandbox-components"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="lifecycle hooks"
              navigateTo="lifecycle"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="custom hooks"
              navigateTo="custom-hooks"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="memoization"
              navigateTo="memoization"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="context"
              navigateTo="context"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="forms"
              navigateTo="forms"
              onClose={() => setOpen(false)}
              divider={false}
            />
          </List>
        </Drawer>

        <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
          <NavItem label="components" to="sandbox-components" color="black" />
          <NavItem label="lifecycle hooks" to="lifecycle" color="black" />
          <NavItem label="custom hooks" to="custom-hooks" color="black" />
          <NavItem label="memoization" to="memoization" color="black" />
          <NavItem label="context" to="context" color="black" />
          <NavItem label="forms" to="forms" color="black" />
        </Box>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Sandbox;
