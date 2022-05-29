import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Authtorization } from "./Authtorization";
import { Home } from "./Home";
import { News } from "./News";
import { NotFound } from "./NotFound";
import { Profile } from "./Profile";

export const RoutesComp = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/auth/login" element={<Authtorization type={"login"} />} />
        <Route
          path="/auth/singup"
          element={<Authtorization type={"singup"} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
