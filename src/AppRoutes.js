import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import CommingSoon from "./components/sections/Dialog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/coming-soon" Component={CommingSoon} />
      <Route path="*" Component={CommingSoon} />
    </Routes>
  );
};

export default AppRoutes;
