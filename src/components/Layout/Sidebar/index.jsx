import PropTypes from "prop-types";
import {
  Divider,
  Toolbar,
  Drawer as MuiDrawer,
  styled,
  IconButton,
  List,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { menuRoutes } from "./../../../routes/protectedRoutes";

import useScreenSize from "./../../../hooks/useScreenSize";
import NavItem from "../NavItem";
import { navbarWidth } from "../../../utils/uiUtils";

const drawerMixin = (theme, open) => ({
  width: open ? navbarWidth : `calc(${theme.spacing(7)} + 1px)`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: open
      ? theme.transitions.duration.enteringScreen
      : theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  transform: "none !important",
  visibility: "visible !important",
  [theme.breakpoints.up("sm")]: {
    width: open ? navbarWidth : `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...drawerMixin(theme, open),
  "& .MuiDrawer-paper": drawerMixin(theme, open),
}));

const Sidebar = ({ isNavbarCollapsed, onNavbarToggle }) => {
  const { isMobile } = useScreenSize();

  if (isMobile && isNavbarCollapsed) {
    return null;
  }

  const navBarMobileStyles = isMobile
    ? {
        position: "fixed",
        zIndex: 1500,
        width: "100%",
        height: "100%",
      }
    : {};

  return (
    <Drawer
      sx={{
        ...navBarMobileStyles,
        "& .MuiDrawer-paper": {
          padding: 0,
          margin: 0,
          position: "relative",
          width: isMobile ? "100%" : "auto",
          height: "100%",
        },
      }}
      variant="persistent"
      anchor="right"
      open={!isNavbarCollapsed}
    >
      {isMobile && (
        <IconButton
          onClick={onNavbarToggle}
          sx={{ width: 42, alignSelf: "end", m: 1 }}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}
      {!isMobile && <Toolbar className="layout-toolbar" />}
      <Divider />
      <List>
        {menuRoutes?.map((el) => (
          <NavItem key={el.id} item={el} />
        ))}
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  isNavbarCollapsed: PropTypes.bool.isRequired,
  onNavbarToggle: PropTypes.func.isRequired,
};

export default Sidebar;
