import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/components/NavItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DrawerListItem from "../DrawerListItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

const LifeCycleHooks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}>
          <ExpandMoreIcon />
        </IconButton>

        <Drawer anchor="top" open={isOpen} onClose={() => setOpen(false)}>
          <List>
            <DrawerListItem
              label="Initial"
              navigateTo="Initial"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useState"
              navigateTo="use-state-cycle"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useEffectDidMount"
              navigateTo="componentDidMount"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useEffectDidUpdate"
              navigateTo="componentDidUpdate"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useEffectWillUnmount"
              navigateTo="componentWillUnmount"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useEffectNoDependencies"
              navigateTo="no-dependencies"
              onClose={() => setOpen(false)}
              divider={false}
            />
          </List>
        </Drawer>

        <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
          <NavItem label="Initial" to="initial" color="black" />
          <NavItem label="useState" to="use-state-cycle" color="black" />
          <NavItem
            label="useEffectDidMount"
            to="componentDidMount"
            color="black"
          />
          <NavItem
            label="useEffectDidUpdate"
            to="componentDidUpdate"
            color="black"
          />
          <NavItem
            label="useEffectWillUnmount"
            to="componentWillUnmount"
            color="black"
          />
          <NavItem
            label="useEffectNoDependencies"
            to="no-dependencies"
            color="black"
          />
        </Box>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default LifeCycleHooks;
