import { Navigate, Outlet, useLocation } from "react-router-dom";
import { CssBaseline, Box, Container, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { blueGrey, grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import styles from "./index.module.css";
import { toggleNavbar } from "./../../store/slices/uiSlice";
import { themeModes } from "../../utils/uiUtils";
import useScreenSize from "../../hooks/useScreenSize";
import { useAuth } from "../../hooks/useAuth";

const Layout = () => {

  const theme = useTheme();
  const { isMobile } = useScreenSize();

  const dispatch = useDispatch();
  const { isNavbarCollapsed } = useSelector((state) => state?.ui);
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const toggleDrawer = () => {
    dispatch(toggleNavbar());
  };

  if(!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }

  return (
    <Box className={styles["layout-container"]} sx={{
      background:
        theme.palette.mode === themeModes?.DARK
          ? blueGrey[900]
          : grey[100],
    }}>
      <CssBaseline />
      <Sidebar
        isNavbarCollapsed={isNavbarCollapsed}
        onNavbarToggle={toggleDrawer}
      />
      <Box className={styles["content-wrapper"]} component="main">
        <Header onNavbarToggle={toggleDrawer} />
        <Container className="content-container" maxWidth="false">
          <Paper sx={{ px: isMobile ? 2 : 4, py: 2 }}>
            <Outlet />
          </Paper>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
