import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import MenuLink from "./MenuLink";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "../../../../providers/ThemeProvider";

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { isDark, toggleDarkMode } = useTheme();

  const { user } = useUser();
  const { handleLogout } = useUsers();
  const [color, setColor] = useState(() => {
    if (isDark) return "#fff";
    return "#000";
  });

  useEffect(() => {
    if (isDark) return setColor("#fff");
    return setColor("#000");
  }, [isDark]);

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        {user && (
          <Box>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton
                sx={{ width: "100%", textAlign: "center" }}
                onClick={toggleDarkMode}
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              <MenuLink
                label="about"
                color={color}
                navigateTo={ROUTES.ABOUT}
                onClick={onClose}
              />

              <MenuLink
                label="cards"
                color={color}
                navigateTo={ROUTES.CARDS}
                onClick={onClose}
              />

              <MenuLink
                label="fav cards"
                color={color}
                navigateTo={ROUTES.FAV_CARDS}
                onClick={onClose}
              />
              {user.isBusiness && (
                <MenuLink
                  label="my cards"
                  color={color}
                  navigateTo={ROUTES.MY_CARDS}
                  onClick={onClose}
                />
              )}

              {user.isAdmin && (
                <>
                  <MenuLink
                    label="sandbox"
                    color={color}
                    navigateTo={ROUTES.SANDBOX}
                    onClick={onClose}
                  />
                  <MenuLink
                    label="CRM"
                    color={color}
                    navigateTo={ROUTES.USERS}
                    onClick={onClose}
                  />
                </>
              )}
            </Box>
            <MenuLink
              label="profile"
              color={color}
              navigateTo={`${ROUTES.USER_PROFILE}/${user._id}`}
              onClick={onClose}
            />

            <MenuLink
              label="edit account"
              color={color}
              navigateTo={`${ROUTES.EDIT_USER}/${user._id}`}
              onClick={onClose}
            />

            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </Box>
        )}
        {!user && (
          <Box>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
            <MenuLink
              label="login"
              color={color}
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
            />
            <MenuLink
              label="signup"
              color={color}
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
            />
          </Box>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
