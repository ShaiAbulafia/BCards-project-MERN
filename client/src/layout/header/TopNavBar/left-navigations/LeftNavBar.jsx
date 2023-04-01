import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="about" to={ROUTES.ABOUT} />

        {user && (
          <>
            <NavItem label="fav cards" to={ROUTES.FAV_CARDS} />
          </>
        )}

        {user && user.isBusiness && (
          <NavItem label="my cards" to={ROUTES.MY_CARDS} />
        )}

        {user && user.isAdmin && (
          <NavItem label="sandbox" to={ROUTES.SANDBOX} />
        )}

        {user && user.isAdmin && <NavItem label="CRM" to={ROUTES.USERS} />}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
