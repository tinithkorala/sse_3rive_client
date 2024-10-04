import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Stack direction="row">
        <Sidebar />
        <Stack>
          <Header />
          <Outlet />
          <Footer />
        </Stack>
      </Stack>
    </>
  );
};

export default Layout;
