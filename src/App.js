import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import PlanPage from "./Pages/PlanPage";
import SmartCardPage from "./Pages/SmartCardPage";
import TemplatePage from "./Pages/TemplatePage";
import Dashboard from "./Pages/Dashboard";
import VerifyEmail from "./Pages/VerifyEmail";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";
import AuthChecker from "./components/AuthChecker";
import AdminDashboard from "./Pages/AdminDashboard";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet /> {/* This is where the nested page will render */}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* <AuthChecker> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/plans" element={<PlanPage />} />
          <Route path="/smart-cards" element={<SmartCardPage />} />
          <Route path="/template" element={<TemplatePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

      </Routes>
      {/* </AuthChecker> */}
    </Router>
  );
}

export default App;
