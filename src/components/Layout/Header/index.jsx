import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Avatar,
  Stack,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";

import { toggleTheme } from "../../../store/slices/uiSlice";

import { navbarWidth, themeModes } from "../../../utils/uiUtils";
import { signOut } from "../../../store/slices/authSlice";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: navbarWidth,
    width: `calc(100% - ${navbarWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ onNavbarToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.ui.theme);
  const handleSignOut = async () => {
    dispatch(signOut());
  };

  return (
    <AppBar sx={{ m: 0, p: 0, position: "inherit" }}>
      <Toolbar sx={{ minHeight: "55px !important" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.25}
          >
            <Tooltip title="Toggle">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={onNavbarToggle}
              >
                <MenuIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Home">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => navigate("/")}
              >
                <HomeIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0.25}
          >
            <Tooltip title="Notifications" className="hide">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="notifications"
              >
                <NotificationsIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Mode">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="theme-mode"
                onClick={() => dispatch(toggleTheme())}
              >
                {theme === themeModes?.LIGHT ? (
                  <LightModeIcon fontSize="small" />
                ) : (
                  <DarkModeIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Sign-out">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="sign-out"
                onClick={handleSignOut}
              >
                <ExitToAppIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Profile">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="profile-avatar"
              >
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt={"Sam"}
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onNavbarToggle: PropTypes.func.isRequired,
};

export default Header;
