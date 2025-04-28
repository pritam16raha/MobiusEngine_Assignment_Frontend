// routes.tsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
