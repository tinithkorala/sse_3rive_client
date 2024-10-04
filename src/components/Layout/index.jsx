import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import styles from "./index.module.css";
import { Outlet } from "react-router-dom";
import { CssBaseline, Box, Container, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { toggleNavbar } from "./../../store/slices/uiSlice";
import useScreenSize from "../../hooks/useScreenSize";
import { blueGrey, grey } from "@mui/material/colors";
import { themeModes } from "../../utils/uiUtils";
import { useTheme } from "@emotion/react";

const Layout = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isMobile } = useScreenSize();
  const { isNavbarCollapsed } = useSelector((state) => state?.ui);

  const toggleDrawer = () => {
    dispatch(toggleNavbar());
  };

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
