import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { protectedRoutes } from "./routes/protectedRoutes";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
