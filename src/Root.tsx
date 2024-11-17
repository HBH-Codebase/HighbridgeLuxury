import { Routes, Route } from "react-router-dom";
import Home from "./_root/Homepage/Home";
import RootLayout from "./_root/RootLayout";
import ErrorPage from "./_root/404/ErrorPage";
import AboutUs from "./_root/AboutUs/AboutUs";

const Root = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Root;
