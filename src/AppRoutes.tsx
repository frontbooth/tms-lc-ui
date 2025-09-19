import { BrowserRouter, Routes, Route } from "react-router-dom";
import Draft from "./components/pages/Draft/Draft";
import Issuance from "./components/pages/Issuance/Issuance";
import Amendment from "./components/pages/Amendment/Amendment";
import Settlement from "./components/pages/Settlement/Settlement";
import Closure from "./components/pages/Closure/Closure";
import Homepage from "./components/pages/HomePage/Homepage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/issuance" element={<Issuance />} />
        <Route path="/amendment" element={<Amendment />} />
        <Route path="/settlement" element={<Settlement />} />
        <Route path="/closure" element={<Closure />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
