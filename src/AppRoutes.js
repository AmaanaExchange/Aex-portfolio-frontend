import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  );
};

export default AppRoutes;
