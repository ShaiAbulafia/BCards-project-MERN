import React from "react";
import { string, func, bool } from "prop-types";
import ListItem from "@mui/material/ListItem";
import NavItem from "../routes/components/NavItem";

const DrawerListItem = ({ label, navigateTo, onClose, divider }) => {
  return (
    <ListItem
      divider={divider}
      disablePadding
      onClick={onClose}
      sx={{ justifyContent: "center" }}>
      <NavItem label={label} to={navigateTo} color="black" />
    </ListItem>
  );
};

DrawerListItem.propTypes = {
  label: string.isRequired,
  navigateTo: string.isRequired,
  onClose: func.isRequired,
  divider: bool.isRequired,
};

DrawerListItem.defaultProps = {
  divider: true,
};

export default DrawerListItem;
