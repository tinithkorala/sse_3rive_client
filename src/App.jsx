import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { protectedRoutes } from "./routes/protectedRoutes";
import Layout from "./components/Layout";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import theme from "./theme";


function App() {
  const mode = useSelector((state) => state.ui.theme);

  return (
    <ThemeProvider theme={theme(mode)}>
      <Router>
        <Routes>
          {/* Public Routes */}
          {/* Protected Routes */}
          <Route path="/" element={<Layout />}>
            {protectedRoutes?.map((el) => (
              <Route key={el.id} path={el.path} element={el.component} />
            ))}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
