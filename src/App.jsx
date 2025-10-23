import { Routes, Route } from "react-router";
import MainPage from "./pages/Mainpage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/courses/:courseId" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
