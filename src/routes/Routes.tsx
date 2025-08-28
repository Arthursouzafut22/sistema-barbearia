import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PrivateRouter from "../pages/private/PrivateRouter";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Book from "../pages/book/Book";
import Servicos from "../pages/servicos/Servicos";
import Profile from "../pages/profile/Profile";
import Appointments from "../pages/appointments/Appointments";

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
        <Route path="/book" element={<Book />} />
        <Route path="/services" element={<Servicos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/agendamentos" element={<Appointments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesProvider;
