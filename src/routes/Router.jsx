import { Routes, Route } from "react-router";
import MainLayout from "@src/layout/MainLayout";
import Home from "../pages/Home";
import About from "@src/pages/About";
import NotFound from "@src/pages/NotFound";

const AppRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRouter;

