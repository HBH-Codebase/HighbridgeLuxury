import { Routes, Route } from "react-router-dom";
import Home from "./_root/Homepage/Home";
import RootLayout from "./_root/RootLayout";
import ErrorPage from "./_root/404/ErrorPage";
import AboutUs from "./_root/AboutUs/AboutUs";
import Projects from "./_root/Projects/Projects";
import MajesticLagos from "./components/Projects/Majestic-Lagos/MajesticLagos";

const Root = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-projects" element={<Projects />} />
        <Route
          path="/our-projects/majestic-lagos"
          element={<MajesticLagos />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Root;
