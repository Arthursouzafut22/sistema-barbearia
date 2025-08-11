import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";
import Header from "../components/Header/Header";

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesProvider;
