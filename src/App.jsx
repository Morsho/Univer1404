import { BrowserRouter, Route, Routes ,useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rigister from "./pages/Rigister";
import DashboardHome from "./pages/DashboardHome";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Rigister />} />
          <Route path="/DashboardHome" element={<DashboardHome />} />
          <Route path="/DashboardLayout" element={<DashboardLayout />} />
          <Route
            path="/attendance"
            element={
              isAuthenticated() ? <Attendance /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
