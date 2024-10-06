import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import protectedRoutes from "./routes/protectedRoutes";
import publicRoutes from "./routes/publicRoutes";
import Layout from "./components/Layout";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import theme from "./theme";
import GuestLayout from "./components/GuestLayout";

function App() {
  const mode = useSelector((state) => state.ui.theme);

  return (
    <SnackbarProvider
      domRoot={document.getElementById("snackbar-root")}
      dense={true}
      autoHideDuration={4000}
      maxSnack={5}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <ThemeProvider theme={theme(mode)}>
        <Router>
          <Routes>
            {/* Protected Routes */}
            <Route path="/" element={<Layout />}>
              {protectedRoutes?.map((el) => (
                <Route key={el.id} path={el.path} element={el.component} />
              ))}
            </Route>

            {/* Public Routes */}
            <Route path="/" element={<GuestLayout />}>
              {publicRoutes?.map((el) => (
                <Route key={el.id} path={el.path} element={el.component} />
              ))}
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
