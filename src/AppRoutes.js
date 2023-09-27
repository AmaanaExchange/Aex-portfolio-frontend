import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Dialog from "./components/sections/Dialog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/coming-soon" Component={Dialog} />
    </Routes>
  );
};

export default AppRoutes;
